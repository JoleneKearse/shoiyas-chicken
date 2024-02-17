import Header from "../components/Header"
import Footer from "../components/Footer"
import ComingSoon from "/coming-soon.svg"

const MenuPage = () => {
  return (
    <section className="static h-full absolute w-full bg-brand-blue overscroll-none">
      <Header />
      <main className="py-20 px-6 bg-brand-800 lg:px-96">
        <img src={ComingSoon} alt="coming soon" className="mx-auto" />
      </main>
      <Footer />
    </section>
  )
}

export default MenuPage