import Image from "/restaurant.png"
import Phone from "/phone.svg"
import Email from "/email.svg"
import MapBrand from "/map2.svg"

const ContactDetails = () => {
  return (
    <section>
      <h2 className="text-3xl font-courgette font-bold text-brand-300 pb-8">Contact Us</h2>
      <img src={Image} alt="restaurant" className="py-7 max-w-80 lg:mx-auto" />

      <div className="flex gap-2">
        <img 
          src={Phone} 
          alt="phone" 
          className="w-5 hover:backdrop-saturate-100"
        />
        <p className="text-base font-roboto text-brand-100 leading-10 hover:font-semibold">(519) 918 - 6333</p>
      </div>
      <div className="flex gap-2">
        <img 
          src={Email} 
          alt="email" 
          className="w-5 hover:backdrop-saturate-100"
        />
        <p className="text-base font-roboto text-brand-100 leading-10 hover:font-semibold">
          shoiyasspecialty@gmail.com
        </p>
      </div>
      <div className="flex gap-2">
        <img
          src={MapBrand}
          alt="directions"
          className="w-5 hover:backdrop-saturate-100"
        />
        <p className="text-base font-roboto text-brand-100 leading-10 hover:font-semibold">537 Christina St N Sarnia, ON N7T 5W5</p>
      </div>
    </section>
  )
}

export default ContactDetails