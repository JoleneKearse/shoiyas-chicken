import Image from "/restaurant.png"

const Intro = () => {
  return (
    <section>
      <p className="text-lg text-brand-100 leading-10 max-w-prose mx-auto pb-3 font-roboto lg:text-xl">Looking for <span className="text-brand-300 font-semibold">delicious</span> and <span className="text-brand-300 font-semibold">healthy</span> eating in Sarnia?</p>

      <p className="text-lg text-brand-100 font-roboto leading-10 max-w-prose mx-auto lg:text-xl">We are completely <span className="text-brand-300 font-semibold">Gluten-Free</span> and <span className="text-brand-300 font-semibold">Halal</span>. Our meal options are <span className="text-brand-300 font-semibold">oven baked</span> and never deep fried.</p>

      <img src={Image} alt="restaurant" className="py-7 w-full md:max-w-96 mx-auto" />
    </section>
  )
}

export default Intro