import { map } from "../assets/images"
import Logo from "./Logo"
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-center mb-4 md:mb-0 ">
          <Logo />
          <p className="text-meduin text-center md:text-left mt-2">
            Institute of Advanced Technology Education &<br />
            Research
          </p>
        </div>

        <div className="text-center md:text-center  w-[300px]">
          <h3 className=" mb-2 font-bold">Contact</h3>
          <p className="text-meduin text-gray-600 mb-1">iaterkorea2020@gmail.com</p>
          <p className="text-meduin text-gray-600 mb-2">+82 20 56 527 800</p>

          <div className="flex justify-center md:justify-center space-x-4">
            <a href="#" className="flex items-center text-sm text-gray-600">
              <FaFacebook className="mr-1 text-blue-600 text-3xl" />
              iATER
            </a>
            <a href="#" className="flex items-center text-sm text-gray-600">
              <FaMapMarkerAlt className="mr-1  text-orange-500 text-3xl" />
              Address
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={map} alt="Map" className="w-32 h-32 object-cover rounded" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
