import Header from "../components/Header"
import ContactDetails from "../components/ContactDetails"
import Footer from "../components/Footer"


const Contact = () => {
  return (
    <section className="static h-full absolute w-full bg-brand-blue overscroll-none">
      <Header />
      <main className="py-20 px-6 bg-brand-800 lg:px-96">
        <ContactDetails />
      </main>
      <Footer />
    </section>
  )
}

export default Contact