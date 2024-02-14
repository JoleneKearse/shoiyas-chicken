import Header from "../components/Header"
import Intro from "../components/Intro"
import Footer from "../components/Footer"


const HomePage = () => {
  return (
    <div className="static h-full absolute w-full bg-brand-blue">
      <Header />
      <Intro />
      <Footer />
    </div>
  )
}

export default HomePage