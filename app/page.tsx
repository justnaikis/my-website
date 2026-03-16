import FacesChangingAnimation from "./components/facesChangingAnimation";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-screen w-full flex">
        <div className="w-1/2 flex items-center justify-center text-4xl font-bold bg-clip-text">
        <div>
          <div className="text-6xl mb-2">Vėjas Gecevičius</div>
          <div className="text-4xl italic">Aero photographer</div>
        </div>
        </div>
        <div className="w-1/2">
          <FacesChangingAnimation />
        </div>
      </div>
      <div  className="w-full border-b-2 border border-gray-300"/>
      <div className="justify-center flex text-6xl mt-8 font-bold italic">My Work</div>
      <div className="h-screen p-12">
        <div className=" bg-gray-200 h-full rounded-3xl">

        </div>
      </div>
      <div  className="w-full border-b-2 border border-gray-300"/>
      <div className="p-8 flex items-center justify-center text-2xl font-bold">
        <div>
          <div className="flex justify-center text-6xl my-4">Contact Me</div>
          <div className="flex justify-center h-10 items-center m-1 gap-3"><FaPhoneAlt className="h-9 w-9"/> +48 889 459 362</div>
          <div className="flex justify-center h-10 items-center m-1 gap-3"><FaWhatsapp className="h-9 w-9"/> +370 648 43 441</div>
          <div className="flex justify-center h-10 items-center m-1 gap-3"><MdOutlineMail className="h-9 w-9"/> geceviusvejas@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
