import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
