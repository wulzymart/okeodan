import React, { cache } from 'react'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import PageHeading from '@/components/page-heading'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import ItemNotFound from '@/components/item-not-found'
import SearchInput from '@/components/search/search'
import Link from 'next/link'
import ListCardBg from '@/components/post-cards/list-card-with-bg'
import { validateGalleryType, galleryTypes } from '@/lib/gallery-utils'

type Args = {
  params: Promise<{
    type: string
  }>
  searchParams: Promise<{ page?: string; search?: string }>
}
const queryPostByType = cache(
  async ({ page = 1, typeWithS }: { page?: number; typeWithS: string }) => {
    const type = validateGalleryType(typeWithS)
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config })

    const res = await payload.find({
      collection: 'galleries',
      draft,
      limit: 20,
      overrideAccess: draft,
      page: page,
      where: {
        type: { equals: type as string },
      },
    })
    return res
  },
)
export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { type } = await paramsPromise
  const meta: Metadata = {
    title: `${type[0].toUpperCase() + type.slice(1)}  Community | Oke-Odan`,
    description: `Explore pictures and videos of ${type} in Oke-odan across all our communities`,
    openGraph: {
      url: `/oke-odan-galleries/${type}`,
      title: `${type[0].toUpperCase() + type.slice(1)}  Community | Oke-Odan`,
      description: `Explore pictures and videos of ${type} in Oke-odan across all our communities`,
    },
  }
  return meta
}

const Page = async ({ params, searchParams }: Args) => {
  const { type } = await params
  const { page: currentPage, search } = await searchParams

  const {
    docs: posts,
    totalPages,
    page,
  } = await queryPostByType({
    page: currentPage ? Number(currentPage) : undefined,
    typeWithS: type,
  })
  const pageUrl = `/oke-odan-galleries/${type}`
  return (
    <>
      <PageHeading
        bigText={`${type.toUpperCase()} Galleria`}
        smallText="Oke-Odan"
        bgImg="/oke-odan-festival.jpg"
      />
      <main className="w-[90vw] mx-auto my-10">
        <SearchInput url={`/oke-odan-galleries/${galleryTypes}`} entity="gallery" />
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 my-10">
          {posts.length ? (
            posts.map((post) => {
              const featuredImage = post.images[0]
              return (
                <div
                  key={post.id}
                  className="w-full md:w-full h-[400px] bg-white p-4 md:p-10 no-underline"
                >
                  <Link
                    href={`/oke-odan-galleries/${type}/${post.slug}`}
                    className="no-underline text-gray-600"
                  >
                    <ListCardBg title={post.title} featuredImage={featuredImage.image} />
                  </Link>
                </div>
              )
            })
          ) : (
            <div className="col-span-6">
              <ItemNotFound
                title={search ? undefined : 'No Gallery available at this time'}
                message={search ? undefined : 'We are yet to populate this gallery section'}
                suggestion={search ? undefined : 'Please come back soon'}
              />
            </div>
          )}
        </section>
        <div className="mt-10">
          {!(posts.length && page) ? (
            ''
          ) : (
            <Pagination>
              <PaginationContent>
                {page && page > 1 && (
                  <PaginationItem>
                    <PaginationPrevious
                      href={`${pageUrl}?page=${page - 1}${search && `&search=${search}`}`}
                    />
                  </PaginationItem>
                )}
                {page && page > 3 && (
                  <>
                    <PaginationItem>
                      <PaginationLink href={`${pageUrl}?page=${1}${search && `&search=${search}`}`}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  </>
                )}
                {page > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      href={`${pageUrl}?page=${page - 1}${search && `&search=${search}`}`}
                    >
                      {page - 1}
                    </PaginationLink>
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink
                    href={`${pageUrl}?page=${page}${search && `&search=${search}`}`}
                    isActive
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
                {page < totalPages && (
                  <PaginationItem>
                    <PaginationLink
                      href={`${pageUrl}?page=${page + 1}${search && `&search=${search}`}`}
                    >
                      {page + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}
                {page < totalPages - 2 && (
                  <>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href={`${pageUrl}?page=${totalPages}${search && `&search=${search}`}`}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}
                {page < totalPages && (
                  <PaginationItem>
                    <PaginationNext
                      href={`${pageUrl}?page=${page + 1}${search && `&search=${search}`}`}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
    </>
  )
}

export default Page
