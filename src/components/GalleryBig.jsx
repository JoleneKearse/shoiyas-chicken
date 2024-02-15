/* eslint-disable react/no-unknown-property */
import saladTrio from "../assets/saladTrio.jpg"
import soupChickenVegetable from "../assets/chicken-vegetable-soup.jpg"
import everythingSmoothie from "../assets/emmas-everything-smoothie.jpg"
import ricePie from "../assets/jerk-chicken-roasted-veggies-rice-pie.jpg"
import truffle from "../assets/chicken-rice-peas-black-garlic-truffle-parmesan-cheese-caesar.jpg"
import meal from "../assets/jerk-chicken-rice-coleslaw.jpg"

const foodImages = [
  {
    source: saladTrio,
    alt: "Garden, Mango, and Tomato and corn small salads",
    tooltip: "Garden, Mango, and Tomato and corn small salads",
    key: "saladTrio",
  },
  {
    source: soupChickenVegetable,
    alt: "Chicken and vegetable soup",
    tooltip: "Chicken and vegetable soup",
    key: "chicken-vegetable-soup",
  },
  {
    source: everythingSmoothie,
    alt: "Emma's Everything Smoothie",
    tooltip: "Emma's Everything Smoothie",
    key: "emmas-everything-smoothie",
  },
  {
    source: ricePie,
    alt: "Jerk chicken and roasted veggies rice pie",
    tooltip: "Jerk chicken and roasted veggies rice pie",
    key: "jerk-chicken-roasted-veggies-rice-pie",
  },
  {
    source: truffle,
    alt: "Chicken rice peas and black garlic truffle parmesan cheese caesar",
    tooltip: "Chicken rice peas and black garlic truffle parmesan cheese caesar",
    key: "chicken-rice-peas-black-garlic-truffle-parmesan-cheese-caesar",
  },
  {
    source: meal,
    alt: "Jerk chicken with rice and coleslaw",
    tooltip: "Jerk chicken with rice and coleslaw",
    key: "jerk-chicken-rice-coleslaw",
  },
];

const GallaryBig = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
      {foodImages.map((image) => (
        <img
          src={image.source}
          key={image.key}
          alt={image.alt}
          title={image.tooltip}
          className="h-auto max-w-full rounded-lg"
        />
      ))}
    </div>
  )
}

export default GallaryBig