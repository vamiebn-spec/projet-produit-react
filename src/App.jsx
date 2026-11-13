import Name from './components/Name'
import Price from './components/Price'
import Description from './components/Description'
import Image from './components/Image'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f1fa] px-5 py-12">
      <article className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_-35px_rgba(45,30,90,0.35)] md:grid-cols-2">
        <div className="relative min-h-80 overflow-hidden bg-violet-100 md:min-h-[570px]">
          <Image />
          <span className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-800 shadow-sm">
            Sélection premium
          </span>
        </div>

        <div className="flex flex-col justify-center px-7 py-10 sm:px-11 md:px-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
            Audio · Nouvelle collection
          </p>
          <Name />
          <div className="my-6 h-px w-full bg-slate-100" />
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            Prix
          </p>
          <Price />
          <div className="mt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              Description du produit
            </p>
            <Description />
          </div>
          <button
            type="button"
            className="mt-9 w-full rounded-xl bg-violet-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-xl"
          >
            Découvrir le produit
          </button>
          <p className="mt-5 text-center text-xs text-slate-400">
            Qualité · Confort · Élégance
          </p>
        </div>
      </article>
    </main>
  )
}

export default App