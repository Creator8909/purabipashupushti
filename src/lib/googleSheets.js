const SHEET_ID = import.meta.env.VITE_SHEET_ID

export async function submitRating(image, rating) {
  const timestamp = new Date().toISOString()
  
  // In production, you would use Netlify Functions to securely submit to Sheets
  console.log('Would submit to Sheets:', {
    timestamp,
    imageName: image.name,
    imageUrl: `https://drive.google.com/file/d/${image.id}/view`,
    rating
  })
  
  // For now, we'll just log it
  return Promise.resolve()
}
