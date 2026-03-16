import Image from "next/image"
import backImage from "@/app/images/headImage.png"
import topImage from "@/app/images/bgImage.png"

export default function FacesChangingAnimation() {
  return (
    <div className="flex justify-center h-full items-center">
      <div className="relative h-full w-full">
        <Image
          src={topImage}
          alt="Faces Changing Animation"
          width={400}
          height={300}
          className="object-contain w-full h-full"
        />
        <div className="absolute top-0 hover:opacity-0 transition-opacity duration-500 w-full h-full">
          <Image
            src={backImage}
            alt="Faces Changing Animation"
            width={400}
            height={300}
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}
