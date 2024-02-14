import Header from "../components/Header"
import Intro from "../components/Intro"
import Footer from "../components/Footer"


const HomePage = () => {
  return (
    <div className="static h-full absolute w-full bg-brand-blue overscroll-none">
      <Header />
      <main className="py-20 px-6 bg-brand-800">
        <Intro />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage