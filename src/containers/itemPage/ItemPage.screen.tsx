import react from 'react'
import { useLocation } from 'react-router-dom'

const ItemPage = () => {
  let location = useLocation();
  return <div>{location.pathname}</div>
}
export default ItemPage