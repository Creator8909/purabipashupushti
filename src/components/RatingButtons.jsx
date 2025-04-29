import { useState } from 'react'
import './RatingButtons.css'

export default function RatingButtons({ onRate }) {
  const [selectedRating, setSelectedRating] = useState(null)

  const handleRating = (rating) => {
    setSelectedRating(rating)
    setTimeout(() => {
      onRate(rating)
      setSelectedRating(null)
    }, 500)
  }

  return (
    <div className="rating-buttons">
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          className={`rating-btn ${selectedRating === rating ? 'selected' : ''}`}
          onClick={() => handleRating(rating)}
        >
          {rating}
        </button>
      ))}
    </div>
  )
}
