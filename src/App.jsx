import { useState, useEffect } from 'react'
import ImageViewer from './components/ImageViewer'
import RatingButtons from './components/RatingButtons'
import ProgressBar from './components/ProgressBar'
import { fetchDriveImages } from './lib/googleDrive'
import { submitRating } from './lib/googleSheets'
import './styles.css'

export default function App() {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDriveImages()
      .then(setImages)
      .finally(() => setIsLoading(false))
  }, [])

  const handleRating = async (rating) => {
    await submitRating(images[currentIndex], rating)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  if (isLoading) return <div className="loader">Loading images...</div>
  if (images.length === 0) return <div className="loader">No images found</div>

  return (
    <div className="app">
      <ProgressBar current={currentIndex + 1} total={images.length} />
      <ImageViewer image={images[currentIndex]} />
      <RatingButtons onRate={handleRating} />
    </div>
  )
}
