'use client'
import { useReducer } from 'react'
import Card from './Card'

const venues = [
  { vid: '001', venueName: 'The Bloom Pavilion', imgSrc: '/img/bloom.jpg' },
  { vid: '002', venueName: 'Spark Space', imgSrc: '/img/sparkspace.jpg' },
  { vid: '003', venueName: 'The Grand Table', imgSrc: '/img/grandtable.jpg' },
]

type RatingAction = { type: 'add'; venueName: string; rating: number } | { type: 'remove'; venueName: string }

function ratingReducer(ratings: Map<string, number>, action: RatingAction) {
  const next = new Map(ratings)
  if (action.type === 'add') next.set(action.venueName, action.rating)
  else next.delete(action.venueName)
  return next
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingReducer, new Map(venues.map((v) => [v.venueName, 0])))

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {venues.map((v) => (
          <Card
            key={v.vid}
            {...v}
            onRating={(rating) => dispatch({ type: 'add', venueName: v.venueName, rating })}
          />
        ))}
      </div>
      <div className="mt-8">
        <p className="mb-2 font-semibold">Venue List with Ratings : {ratings.size}</p>
        {[...ratings].map(([venueName, rating]) => (
          <div
            key={venueName}
            data-testid={venueName}
            className="cursor-pointer py-1 hover:underline"
            onClick={() => dispatch({ type: 'remove', venueName })}
          >
            {venueName} : {rating}
          </div>
        ))}
      </div>
    </div>
  )
}
