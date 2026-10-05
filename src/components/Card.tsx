'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Rating from '@mui/material/Rating'
import InteractiveCard from './InteractiveCard'

export default function Card({
  vid,
  imgSrc,
  venueName,
  onRating,
}: {
  vid: string
  imgSrc: string
  venueName: string
  onRating: (rating: number) => void
}) {
  const [rating, setRating] = useState<number | null>(0)

  return (
    <InteractiveCard>
      {/* Rating sits outside the Link so clicking stars doesn't navigate */}
      <Link href={`/venue/${vid}`} className="block">
        <div className="relative w-full h-48">
          <Image src={imgSrc} alt={venueName} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="px-4 pt-4 font-medium">{venueName}</div>
      </Link>
      <div className="px-4 pb-4">
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={(_, value) => {
            setRating(value)
            onRating(value ?? 0)
          }}
        />
      </div>
    </InteractiveCard>
  )
}
