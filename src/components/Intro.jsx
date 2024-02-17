import Image from "/restaurant.png"

const Intro = () => {
  return (
    <section>
      <article className="w-full mx-auto py-10 px-14 bg-brand-aqua rounded-blurb1">
        <p className="text-xl text-brand-800 font-semibold leading-8 text-center max-w-prose mx-auto pt-5 pb-8 font-roboto lg:text-xl">
          Want&nbsp;
          <span className="text-pink font-bold">delicious</span> food that is actually&nbsp;
          <span className="text-pink font-bold">good for you</span>?
        </p>
        <p className="text-xl text-brand-800 font-roboto font-semibold leading-10 max-w-prose mx-auto text-center lg:text-xl">
          Our meals are:
        </p>
        <ul className="text-center pb-8">
          <li className="text-pink text-xl font-bold -pt-12">gluten-free,</li>
          <li className="text-pink text-xl font-bold">halal,</li>
          <li className="text-pink text-xl font-bold">& always oven baked, never ever fried!</li>
        </ul>
        <p className="text-xl text-brand-800 font-roboto font-semibold leading-8 text-center max-w-prose mx-auto pb-10 lg:text-xl">
          Whether you're hungry for <span className="text-pink text-xl font-bold">Jerk Chicken</span>, <span className="text-pink text-xl font-bold">Wings</span>, or a <span className="text-pink text-xl font-bold">Smoothie</span> with extra health benefits, we have you covered!
        </p>
      </article>

      <img src={Image} alt="restaurant" className="py-7 w-full rounded-img1 md:max-w-96 mx-auto" />
    </section>
  )
}

export default Intro