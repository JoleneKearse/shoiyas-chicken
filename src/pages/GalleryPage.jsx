import Header from "../components/Header"
import GalleryBig from "../components/GalleryBig"
import Footer from "../components/Footer"

const GallaryPage = () => {
  return (
    <div className="static h-full absolute w-full bg-brand-blue overscroll-none">
      <Header />
      <main className="py-20 px-6 outline-dotted  bg-brand-800 lg:px-96">
        <GalleryBig />
      </main>
      <Footer />
    </div>
  )
}

export default GallaryPage