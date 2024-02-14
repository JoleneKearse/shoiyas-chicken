import Image from "/restaurant.png"
import Phone from "/phone.svg"
import Email from "/email.svg"
import MapBrand from "/map2.svg"

const ContactDetails = () => {
  return (
    <section className="mx-auto">
      <h2 className="text-3xl font-courgette font-bold text-brand-300 text-center pb-8">Contact Us</h2>
      <img src={Image} alt="restaurant" className="py-7 w-full md:max-w-96 mx-auto" />

      <address>
        <div className="flex gap-2 justify-center">
          <img
            src={Phone}
            alt="phone"
            className="w-5 hover:backdrop-saturate-100"
          />
          <a href="tel:+5199186333" className="text-base font-roboto text-brand-100 leading-10 hover:font-semibold">(519) 918 - 6333</a>
        </div>
        <div className="flex gap-2 justify-center">
          <img
            src={Email}
            alt="email"
            className="w-5 hover:backdrop-saturate-100"
          />
          <a href="mailto:shoiyasspecialty@gmail.com" className="text-base font-roboto text-brand-100 leading-10 hover:font-semibold">
            shoiyasspecialty@gmail.com
          </a>
        </div>
        <div className="flex gap-2 justify-center">
          <img
            src={MapBrand}
            alt="directions"
            className="w-5 hover:backdrop-saturate-100"
          />
          <p className="text-base font-roboto text-brand-100 leading-5 hover:font-semibold">537 Christina St N<br /> Sarnia, ON N7T 5W5</p>
        </div>
      </address>
    </section>
  )
}

export default ContactDetails