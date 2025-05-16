export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 bg-[#337f8c] z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Seguros con Ruth</h1>
        <div className="text-2xl md:text-3xl text-white mb-8 max-w-3xl mx-auto">
          <p className="mb-2">Proteger tu futuro, es lo que hacemos.</p>
          <p>Construir relaciones es cómo lo logramos.</p>
        </div>
        <p className="text-xl text-white mb-8">
          Tenemos las mejores opciones de seguros con los precios más competitivos del mercado!
        </p>
        <a
          href="#contacto"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
        >
          COMIENZA AHORA
        </a>
      </div>
    </div>
  )
}
