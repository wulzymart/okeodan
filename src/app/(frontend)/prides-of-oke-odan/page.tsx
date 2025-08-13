import PageHeading from '@/components/page-heading'
import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import configPromise from '@payload-config'
import { getPayload, Where } from 'payload'
import Link from 'next/link'
import SearchInput from '@/components/search/search'
import ItemNotFound from '@/components/item-not-found'
import ListCardBg from '@/components/post-cards/list-card-with-bg'
type Args = {
  searchParams: Promise<{ page?: string; search?: string }>
}

const PridesPage = async ({ searchParams: searchPromise }: Args) => {
  const payload = await getPayload({ config: configPromise })
  const { page: currentPage, search } = await searchPromise
  const where: Where = {
    _status: {
      equals: 'published',
    },
  }
  if (search) where['title'] = { like: search }
  const {
    docs: posts,
    totalPages,
    page,
  } = await payload.find({
    collection: 'prides',
    overrideAccess: false,
    where,
    limit: 10,
    page: Number(currentPage) || 1,
  })
  const pageUrl = '/prides-of-oke-odan'
  return (
    <>
      <PageHeading smallText="Oke-Odan" bigText="Notable People" bgImg="/oke-odan-festival.jpg" />
      <main className="w-[90vw] mx-auto my-10">
        <SearchInput url="/prides-of-oke-odan" entity="people" />
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 my-10">
          {posts.length ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="w-full md:w-full h-[400px] bg-white p-4 md:p-10 no-underline"
              >
                <Link
                  href={`/prides-of-oke-odan/${post.slug}`}
                  className="no-underline text-gray-600"
                >
                  <ListCardBg title={post.title} featuredImage={post.featuredImage} />
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-6">
              <ItemNotFound
                title={search ? undefined : 'No pride available at this time'}
                message={search ? undefined : 'We are yet to populate our prides section'}
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

export default PridesPage
