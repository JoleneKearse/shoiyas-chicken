import Facebook from "/facebook.svg";
import Map from "/map.svg"
import Food from "/chicken.svg"

const Footer = () => {
  return (
    <footer className="bg-brand-blue sticky bottom-0 p-6">
      <div className="flex justify-between items-center">
        <span className="block text-4xl text-brand-300 font-courgette font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pb-3">Shoiya's</span>
        <ul className="flex flex-col gap-3">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100093559993326" target="_blank" rel="noopener noreferrer">
              <div className="flex gap-2">
                <img
                  src={Facebook}
                  alt="Facebook link"
                  className="w-5 hover:backdrop-saturate-100 hover:w-6"
                />
                <p>Facebook</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="flex gap-2">
                <img
                  src={Map}
                  alt="directions"
                  className="w-5 hover:backdrop-saturate-100 hover:w-6"
                />
                <p>Get directions</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/menu" target="_blank" rel="noopener noreferrer">
              <div className="flex gap-2">
                <img
                    src={Food}
                    alt="menu"
                    className="w-5 hover:backdrop-saturate-100 hover:w-6"
                  />
                <p>View our menu</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer