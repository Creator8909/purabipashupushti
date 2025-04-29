export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100
  
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <span className="progress-text">
        {current} of {total}
      </span>
    </div>
  )
}
