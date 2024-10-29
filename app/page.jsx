import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="lg:p-7 p-4 ">
      <div className="grid lg:grid-cols-2 gap-3 items-center justify-between">
        <div className="p-3">
          <h1 className="text-4xl mb-4">
          Hi, I am <span className="font-extrabold">Iftekher Mahmud</span> <br/> a
           <span className="text-stroke ms-3 font-bold text-transparent">Software Engineer</span> 
          </h1>
          <p className="lg:w-3/4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, itaque! Perferendis rem natus enim cumque consequatur blanditiis repudiandae voluptatem vero.</p>
          <Link href={'/about'} className="btn btn-primary">Learn More</Link>
        </div>
        <div>
          <Image src={'/avater.png'} height={500} className="w-full" width={500} alt="hero-avater" />
        </div>
  
      </div>
    </div>
    </>
    

  );
}
