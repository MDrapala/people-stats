const Power = ({
  color,
  size,
  height,
  width,
}: {
  color?: string
  size?: number
  height?: number
  width?: number
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || height}
    width={size || width}
    stroke={color || 'currentColor'}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
    <line x1="12" y1="2" x2="12" y2="12"></line>
  </svg>
)
export default Power
