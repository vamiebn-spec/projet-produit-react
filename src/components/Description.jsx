import product from '../data/product'

function Description() {
  return <p className="text-base leading-8 text-slate-600">{product.description}</p>
}

export default Description