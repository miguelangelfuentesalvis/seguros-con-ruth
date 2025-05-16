import { useState } from "react"
import { FaHeartbeat, FaUsers, FaCar, FaHome, FaTooth, FaArrowRight } from "react-icons/fa"
import ServiceModal from "./ServiceModal"

const serviceItems = [
  {
    id: 1,
    title: "Seguro de Salud",
    icon: <FaHeartbeat size={40} className="text-white" />,
    bgColor: "bg-red-400",
    description: "Protección médica completa para ti y tu familia",
    detailedInfo: {
      intro:
        "Nuestros planes de seguro de salud están diseñados para brindarte acceso a atención médica de calidad cuando más lo necesitas, con cobertura para una amplia gama de servicios médicos y hospitalarios.",
      benefits: [
        "Cobertura para consultas médicas con médicos generales y especialistas",
        "Hospitalización y cirugías con habitación privada",
        "Medicamentos recetados con amplio vademécum",
        "Atención preventiva y chequeos anuales sin costo adicional",
        "Servicios de emergencia y ambulancia las 24 horas",
        "Tratamientos para enfermedades crónicas y graves",
        "Cobertura para maternidad y cuidado del recién nacido",
        "Servicios de laboratorio y diagnóstico por imágenes",
        "Terapias físicas y de rehabilitación",
        "Opciones de planes individuales, familiares y corporativos",
      ],
      whyChoose: [
        "Red amplia de hospitales y médicos de prestigio",
        "Proceso simplificado para autorizaciones médicas",
        "Atención al cliente personalizada para resolver tus dudas",
        "Planes flexibles que se adaptan a tu presupuesto",
        "Cobertura nacional e internacional según el plan elegido",
      ],
    },
  },
  {
    id: 2,
    title: "Seguro de Vida",
    icon: <FaUsers size={40} className="text-white" />,
    bgColor: "bg-green-400",
    description: "Asegura el futuro financiero de tus seres queridos",
    detailedInfo: {
      intro:
        "Nuestros seguros de vida están diseñados para proporcionar seguridad financiera a tus seres queridos en caso de que ya no estés presente para cuidar de ellos, garantizando que puedan mantener su calidad de vida.",
      benefits: [
        "Protección financiera inmediata para tus beneficiarios",
        "Cobertura por fallecimiento por cualquier causa (accidental o por enfermedad)",
        "Opciones de seguros temporales con primas más económicas",
        "Seguros de vida permanentes con acumulación de valor en efectivo",
        "Beneficios anticipados en caso de enfermedades terminales",
        "Opciones para incluir cobertura por invalidez total y permanente",
        "Posibilidad de aumentar la cobertura en eventos importantes de la vida",
        "Planes con beneficios adicionales para gastos funerarios",
        "Opciones de pago flexibles: mensual, trimestral, semestral o anual",
        "Posibilidad de designar múltiples beneficiarios con diferentes porcentajes",
      ],
      whyChoose: [
        "Proceso de contratación sencillo con evaluación médica simplificada",
        "Asesoramiento personalizado para determinar la cobertura ideal",
        "Trámites de reclamación ágiles en momentos difíciles",
        "Compañías aseguradoras con sólida reputación financiera",
        "Pólizas claras sin letra pequeña ni sorpresas",
      ],
    },
  },
  {
    id: 3,
    title: "Seguro de Auto",
    icon: <FaCar size={40} className="text-white" />,
    bgColor: "bg-blue-400",
    description: "Cobertura completa para tu vehículo",
    detailedInfo: {
      intro:
        "Nuestros seguros de auto ofrecen protección integral para tu vehículo contra accidentes, robos y daños a terceros, brindándote tranquilidad al volante y cumpliendo con los requisitos legales de responsabilidad civil.",
      benefits: [
        "Responsabilidad civil por daños a terceros (personas y bienes)",
        "Cobertura por colisión, volcadura y daños materiales",
        "Protección contra robo total del vehículo",
        "Cobertura para daños parciales por robo",
        "Asistencia en carretera 24/7 (grúa, paso de corriente, cambio de llanta)",
        "Cobertura para gastos médicos de ocupantes",
        "Auto sustituto en caso de siniestro o reparación",
        "Defensa legal y fianzas en caso de accidentes",
        "Cobertura para daños por fenómenos naturales",
        "Indemnización garantizada en caso de pérdida total",
      ],
      whyChoose: [
        "Descuentos por buen historial de manejo y antigüedad",
        "Talleres certificados con garantía en reparaciones",
        "Ajustadores disponibles las 24 horas para atender siniestros",
        "Proceso de reclamación simplificado con seguimiento en línea",
        "Opciones de deducibles flexibles para ajustar tu prima",
      ],
    },
  },
  {
    id: 4,
    title: "Seguro de Hogar",
    icon: <FaHome size={40} className="text-white" />,
    bgColor: "bg-yellow-400",
    description: "Protege tu casa y tus bienes más preciados",
    detailedInfo: {
      intro:
        "Nuestros seguros de hogar están diseñados para proteger tu vivienda y pertenencias contra una amplia variedad de riesgos, desde incendios y robos hasta desastres naturales, brindándote tranquilidad y seguridad para tu familia.",
      benefits: [
        "Cobertura para la estructura de tu vivienda contra daños",
        "Protección para tus pertenencias personales y objetos de valor",
        "Responsabilidad civil por daños a terceros dentro de tu propiedad",
        "Cobertura contra incendios, rayos y explosiones",
        "Protección contra daños por agua (tuberías rotas, inundaciones)",
        "Cobertura para daños por fenómenos naturales (huracanes, terremotos)",
        "Protección contra robos, vandalismo y daños malintencionados",
        "Gastos adicionales de vivienda si tu hogar queda inhabitable",
        "Cobertura para electrodomésticos por daños eléctricos",
        "Asistencia en el hogar para emergencias (cerrajería, plomería, electricidad)",
      ],
      whyChoose: [
        "Valoración profesional de tu vivienda para asegurar cobertura adecuada",
        "Opciones para asegurar objetos especiales (joyas, arte, colecciones)",
        "Proceso de reclamación rápido con respuesta en 24-48 horas",
        "Posibilidad de combinar con otros seguros para obtener descuentos",
        "Asesoramiento en medidas de seguridad para reducir riesgos y primas",
      ],
    },
  },
  {
    id: 5,
    title: "Seguro Dental",
    icon: <FaTooth size={40} className="text-white" />,
    bgColor: "bg-purple-400",
    description: "Cuidado dental para toda la familia",
    detailedInfo: {
      intro:
        "Nuestros planes dentales están diseñados para mantener la salud bucal de toda tu familia, cubriendo desde tratamientos preventivos hasta procedimientos más complejos, con acceso a una amplia red de odontólogos calificados.",
      benefits: [
        "Cobertura para limpiezas y revisiones semestrales sin costo adicional",
        "Radiografías dentales incluidas en el plan básico",
        "Tratamientos preventivos como selladores y fluorización",
        "Procedimientos básicos: empastes, extracciones simples y tratamiento de caries",
        "Procedimientos mayores: coronas, puentes, endodoncias y dentaduras",
        "Opciones de ortodoncia para niños y adultos con cobertura parcial o total",
        "Tratamientos de periodoncia para enfermedades de las encías",
        "Descuentos en tratamientos estéticos no cubiertos",
        "Atención de emergencias dentales las 24 horas",
        "Planes familiares con tarifas preferenciales",
      ],
      whyChoose: [
        "Red amplia de dentistas generales y especialistas certificados",
        "Sin períodos de espera para tratamientos preventivos y básicos",
        "Precios preestablecidos para todos los procedimientos",
        "Posibilidad de elegir a tu dentista de confianza dentro de la red",
        "Planes diseñados para todas las edades y necesidades específicas",
      ],
    },
  },
]

function ServiceCard({ service, onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
      <div className={`${service.bgColor} w-24 h-24 rounded-full flex items-center justify-center mb-4`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
      <p className="text-gray-600 text-center mb-4">{service.description}</p>
      <button
        onClick={() => onClick(service.id)}
        className="mt-auto flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        Ver detalles <FaArrowRight className="ml-1" />
      </button>
    </div>
  )
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  function handleServiceClick(serviceId) {
    const service = serviceItems.find((s) => s.id === serviceId)
    setSelectedService(service)
  }

  function handleCloseModal() {
    setSelectedService(null)
  }

  return (
    <section id="servicios" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={handleServiceClick} />
          ))}
        </div>

        {selectedService && <ServiceModal service={selectedService} onClose={handleCloseModal} />}
      </div>
    </section>
  )
}
