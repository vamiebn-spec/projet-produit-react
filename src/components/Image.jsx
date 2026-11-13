import product from '../data/product'

function Image() {
  return (
    <img
      src={product.image}
      alt={product.name}
      className="h-full min-h-72 w-full object-cover transition duration-700 hover:scale-105"
    />
  )
}

export default Image