import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import CalendarIntegration from "../components/calendar/CalendarIntegration";

export default function Home() {
  return (
    <div>
      <Hero />

   {/*    <section id="citas" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Agenda tu cita</h2>
            <CalendarIntegration />
          </div>
        </div>
      </section> */}

      <Services />
      <AboutUs />
      <Testimonials />

      <section id="contacto" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}