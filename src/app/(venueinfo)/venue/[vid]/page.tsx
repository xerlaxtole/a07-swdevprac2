import Image from 'next/image'
import { notFound } from 'next/navigation'

const mockVenueRepo = new Map([
  ['001', { name: 'The Bloom Pavilion', image: '/img/bloom.jpg' }],
  ['002', { name: 'Spark Space', image: '/img/sparkspace.jpg' }],
  ['003', { name: 'The Grand Table', image: '/img/grandtable.jpg' }],
])

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params
  const venue = mockVenueRepo.get(vid)
  if (!venue) notFound()

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 p-8 sm:flex-row sm:items-start">
      <Image
        src={venue.image}
        alt={venue.name}
        width={640}
        height={360}
        className="w-full rounded-lg shadow-lg sm:w-1/3"
      />
      <h1 className="text-2xl font-medium">{venue.name}</h1>
    </main>
  )
}
