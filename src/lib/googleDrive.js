const DRIVE_FOLDER_ID = import.meta.env.VITE_DRIVE_FOLDER_ID
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

export async function fetchDriveImages() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${DRIVE_FOLDER_ID}'+in+parents&key=${API_KEY}`
    )
    const data = await response.json()
    return data.files || []
  } catch (error) {
    console.error('Error fetching Drive images:', error)
    return []
  }
}
