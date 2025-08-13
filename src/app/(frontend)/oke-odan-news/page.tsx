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
import ListCardThumbnail from '@/components/post-cards/list-card-with-thumbnail'
import SearchInput from '@/components/search/search'
import ItemNotFound from '@/components/item-not-found'
type Args = {
  searchParams: Promise<{ page?: string; search?: string }>
}
const NewsListPage = async ({ searchParams: searchPromise }: Args) => {
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
    collection: 'news',
    overrideAccess: false,
    where,
    limit: 10,
    page: Number(currentPage) || 1,
  })
  const pageUrl = '/oke-odan-news'
  return (
    <>
      <PageHeading smallText="Oke-Odan" bigText="News" bgImg="/oke-odan-festival.jpg" />
      <main className="w-[90vw] mx-auto my-10">
        <SearchInput url="/oke-odan-news" entity="news" />
        <section className="space-y-10 my-10 w-[90vw] mx-auto">
          {posts.length ? (
            posts.map((post) => (
              <div key={post.id} className="w-full bg-white p-4 md:p-10">
                <Link href={`/oke-odan-news/${post.slug}`} className="no-underline text-gray-600">
                  <ListCardThumbnail
                    title={post.title}
                    featuredImage={post.featuredImage}
                    content={post.content}
                  />
                </Link>
              </div>
            ))
          ) : (
            <ItemNotFound
              title={search ? undefined : 'No news available at this time'}
              message={search ? undefined : 'We are yet to populate our news section'}
              suggestion={search ? undefined : 'Please come back soon'}
            />
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

export default NewsListPage
