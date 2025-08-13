import { notFound } from 'next/navigation'
export default function NotFoundDummy() {
  throw notFound()
}
