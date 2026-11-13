import product from '../data/product'

function Price() {
  return (
    <p className="text-3xl font-extrabold tracking-tight text-violet-700">
      {product.price.toLocaleString('fr-FR')} FCFA
    </p>
  )
}

export default Price