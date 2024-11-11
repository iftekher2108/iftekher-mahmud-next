import IconSocial from "@/components/iconSocial";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="lg:p-7 p-4">
        <div className="grid lg:grid-cols-2 gap-3 items-center justify-between">
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
            <IconSocial />

          </div>
          <div>
            <Image src={'/avater.png'} height={500} className="w-full" width={500} alt="hero-avater" />
          </div>

        </div>
      </div>

      <div className="lg:p-7 p-4 bg-slate-200">
        <div className="flex items-center justify-center mb-4 pt-10">
          <span className="text-center px-4 uppercase text-3xl font-bold section-title">
            About Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-3 items-center justify-between">

          <div>
            <Image src={'/avater.png'} height={500} className="w-full" width={500} alt="hero-avater" />
          </div>

          <div className="p-3">
            <h1 className="text-4xl mb-4">
              <span className="text-4xl font-extrabold">Software Engineer</span>
            </h1>
            <p className="lg:w-3/4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, itaque! Perferendis rem natus enim cumque consequatur blanditiis repudiandae voluptatem vero.</p>
            <div className="flex gap-4 mb-4">
              <Link href={'/contact'} className="btn btn-primary rounded-full px-10 trans hover:bg-secondary">Hire Me</Link>
              <a href='/iftekher_mahmud.pdf' className="btn btn-primary rounded-full px-10 ">Get Resume</a>
            </div>
            <hr className="bg-gray-800" />
            <IconSocial />
          </div>

        </div>

      </div>

      <div className="lg:p-7 p-4">
        <div className="flex items-center justify-center mb-4 pt-10">
          <span className="text-center px-4 uppercase text-3xl font-bold section-title">
            My skills
          </span>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">

        <div className="card bg-base-100 shadow-xl p-10">
          <Image src={"/icons/html.png"} height={'250'} width={'250'} alt="icon" />
        </div>

        <div className="card bg-base-100 shadow-xl p-10">
          <Image src={"/icons/css.png"} height={'250'} width={'250'} alt="icon" />
        </div>

        </div>


      </div>


    </>


  );
}
