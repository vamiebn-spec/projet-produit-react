import product from '../data/product'

function Name() {
  return <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{product.name}</h1>
}

export default Name