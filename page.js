import Image from "next/image"
import img1 from "../public/images/img-1.gif"
import img2 from "../public/images/img-2.gif"
import img3 from "../public/images/img-3.gif"

export default function Home() {
  const content = [
    {
      id: 1,
      title: "Cat1",
      image: img1,
    },
    {
      id: 2,
      title: "Cat2",
      image: img2,
    },
    {
      id: 3,
      title: "Cat3",
      image: img3,
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row" >
      <h1 className="text-3xl">The Cat App</h1>
      {content.map((item) => (
        <div key={item.id} className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4">
          <Image
            objectFit="cover"
            src={item.image}
            alt={`Picture of ${item.title}`}
            layout="fill"
            priority
          />
        </div>
      ))}
    </div>
  )
}
