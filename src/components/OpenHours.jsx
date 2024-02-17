const hours = [
  {
    day: "Sunday",
    openingHours: "4:00 - 9:00",
  },
  {
    day: "Monday",
    openingHours: "4:00 - 9:00",
  },
  {
    day: "Tueday",
    openingHours: "4:00 - 9:00",
  },
  {
    day: "Wednesday",
    openingHours: "4:00 - 9:00",
  },
  {
    day: "Thursday",
    openingHours: "4:00 - 9:00",
  },
  {
    day: "Friday",
    openingHours: "4:00 - 9:00",
  },
  {
    day: "Saturday",
    openingHours: "4:00 - 9:00",
  },
]

const OpenHours = () => {
  return (
    <article className="w-full mx-auto py-20 bg-pink rounded-opening md:w-3/5 lg:w-2/5">
      <h2 className="flex justify-center flex-wrap text-4xl font-courgette text-brand-800 font-black">Opening Hours</h2>
      <dl>
        {hours.map((hour, index) => (
          <div className="grid grid-cols-2 w-2/3 mx-auto text-xl font-semibold text-brand-200 py-2 md:w-1/2" key={index}>

            <dt>{hour.day}</dt>
            <dd>{hour.openingHours}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export default OpenHours