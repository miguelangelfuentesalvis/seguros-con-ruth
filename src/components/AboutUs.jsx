export default function AboutUs() {
    return (
        <section id="nosotros" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
                        <p className="text-gray-700 mb-4">
                            En Seguros con Ruth, me dedico a proporcionar soluciones de seguros personalizadas que se adaptan a
                            las necesidades específicas de cada cliente. Con años de experiencia en la industria, entiendo que cada
                            situación es única.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Mi misión es simple: ofrecer tranquilidad a través de coberturas confiables y un servicio
                            excepcional. Trabajo con las mejores compañías aseguradoras para garantizar que mis clientes
                            reciban la mejor protección al precio más competitivo.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Lo que me distingue es mi compromiso con las relaciones personales. No soy solo agente de
                            seguros; soy asesora dedicada a tu bienestar a largo plazo.
                        </p>
                        <a
                            href="#servicios"
                            className="bg-[#196172] hover:bg-[#337f8c] text-white font-medium py-2 px-6 rounded-full inline-block transition-colors"
                        >
                            Conoce más
                        </a>
                    </div>
                    <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center">
                        <div className="px-12 flex items-center justify-center w-full h-80">
                            <img className="w-50 h-80 lg:w-70 xl:w-70 lg:h-100 xl:h-100" src="public/ruth.jpg" alt="ruth" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
