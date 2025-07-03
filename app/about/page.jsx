import Link from "next/link"
import Image from "next/image"
import IconSocial from "@/components/iconSocial"

function About() {
    return(
        <>
        <div className="p-4">
        <div className="grid lg:grid-cols-2 gap-3 items-center justify-between">
          
          <div>
            <Image src={'/avater.png'} height={500} className="w-full" width={500} alt="hero-avater" />
          </div>
          
          <div className="p-3">
            <h1 className="text-4xl mb-4">
              Hi, I am <span className="font-extrabold">Iftekher Mahmud</span> <br /> a
              <span className="text-stroke ms-3 font-bold text-transparent">Software Engineer</span>
            </h1>
            <p className="lg:w-3/4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, itaque! Perferendis rem natus enim cumque consequatur blanditiis repudiandae voluptatem vero.</p>
            <div className="flex gap-4">
              <Link href={'/contact'} className="btn btn-primary rounded-full px-10 trans hover:bg-secondary">Hire Me</Link>
              <a href={'/iftekher_mahmud.pdf'} className="btn btn-primary rounded-full px-10 ">Get Resume</a>
            </div>
            <hr className="bg-gray-800" />
            <IconSocial/>
          </div>

        
        </div>
      </div>
        </>
    )
}

export default About
