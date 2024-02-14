import ContactDetails from "../components/ContactDetails"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Contact = () => {
  return (
    <div className="static h-full absolute w-full bg-brand-blue">
      <Header />
      <main className="py-20 px-6 bg-brand-800 lg:px-96">
        <ContactDetails />
      </main>
      <Footer />
    </div>
  )
}

export default Contact