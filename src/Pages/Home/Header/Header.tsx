import { Link } from "react-router-dom";
import headerImage from "../../../assets/pexels-max-avans-5087055.jpg"
import TypewriterComponent from "typewriter-effect"
export default function Header() {
  return (
    <>
        <div className="hero">
    <div className="hero-content flex-col lg:flex-row-reverse gap-16">
    <img src={headerImage} alt="cruise-ship" className="w-full md:w-1/2" />
    <div className="w-full md:w-1/2">
      <h1 className="text-5xl font-bold capitalize">
        {
            <TypewriterComponent onInit={(typewriter) => {
                typewriter
                    .typeString("city tour in luxury river cruise")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("40% off on private compartment")
                    .start();
            }}></TypewriterComponent>
        }
      </h1>
      <p className="py-6">There is an event hosted by <span className="font-semibold">Cruiser 71</span> where a grand opening of luxury cruiser an the event will held on the cruise with city tour</p>
      <Link to="/" className="btn bg-blue-400 text-white hover:bg-blue-500">Register Now</Link>
    </div>
  </div>
</div>
    </>
  )
}
