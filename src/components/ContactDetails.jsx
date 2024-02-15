import Image from "/shoiya-wing.jpg"
import Phone from "/phone.svg"
import Email from "/email.svg"
import MapBrand from "/map2.svg"

const ContactDetails = () => {
  const phone = "5199186333"
  const email = "shoiyasspecialty" + "@" + "gmail.com"
  return (
    <section className="mx-auto">
      <h2 className="text-3xl font-courgette font-bold text-brand-300 text-center pb-8">Contact Us</h2>
      <img src={Image} alt="restaurant" className="py-7 w-full md:max-w-96 mx-auto" />
      <p className="text-base font-roboto text-brand-100 leading-10 max-w-prose mx-auto">
        We welcome catering orders and <i>'Yes, we do have curb-side pickup!</i>
      </p>
      <p className="text-base font-roboto text-brand-100 leading-10 max-w-prose mx-auto">
        All our contact information is here for you.  And you can click on the icons to directly call or email us.
      </p>
      <address className="pt-10">
        <div className="flex justify-center items-center gap-4">
          <a href={`tel:${phone}`} className="text-base font-roboto text-brand-100 leading-10 hover:font-semibold">
            <img
              src={Phone}
              alt="click to call phone number"
              title="Click to call"
              className="w-5 hover:w-6"
            />
          </a>
          <p className="text-base font-roboto text-brand-100 leading-10">(519) 918 - 6333</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href={`mailto:${email}`}>
            <img
              src={Email}
              alt="click to email"
              title="Click to email"
              className="w-5 hover:w-6"
            />
          </a>
          <p className="text-base font-roboto text-brand-100 leading-10">
            shoiyasspecialty@gmail.com
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img
            src={MapBrand}
            alt="directions"
            className="w-5 hover:backdrop-saturate-100"
          />
          <p className="text-base font-roboto text-brand-100 leading-6 pt-4">537 Christina St N<br /> Sarnia, ON N7T 5W5</p>
        </div>
      </address>
    </section>
  )
}

export default ContactDetails