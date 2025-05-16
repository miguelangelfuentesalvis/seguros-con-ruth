import { FaHeartbeat, FaUsers, FaCar, FaHome, FaTooth } from "react-icons/fa"

export default function Icon({ type, size = 24, className = "" }) {
  switch (type) {
    case "health":
      return <FaHeartbeat size={size} className={className} />
    case "life":
      return <FaUsers size={size} className={className} />
    case "auto":
      return <FaCar size={size} className={className} />
    case "home":
      return <FaHome size={size} className={className} />
    case "dental":
      return <FaTooth size={size} className={className} />
    default:
      return null
  }
}
