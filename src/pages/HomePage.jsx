import Header from "../components/Header"
import Intro from "../components/Intro"
import OpenHours from "../components/OpenHours"
import Footer from "../components/Footer"


const HomePage = () => {
  return (
    <section className="static h-full absolute w-full bg-brand-blue overscroll-none">
      <Header />
      <main className="py-20 px-6 bg-brand-800">
        <Intro />
        <OpenHours />
      </main>
      <Footer />
    </section>
  )
}

export default HomePage