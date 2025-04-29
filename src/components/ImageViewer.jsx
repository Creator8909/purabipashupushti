export default function ImageViewer({ image }) {
  return (
    <div className="image-container">
      {image && (
        <img 
          src={`https://drive.google.com/thumbnail?id=${image.id}&sz=w1000`} 
          alt={image.name}
          className="image-viewer"
        />
      )}
    </div>
  )
}
