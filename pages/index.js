import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";

function Home() {
  return (
    <div class="bg-blue-100">
      <Header></Header>
      <div class="font-sans flex w-full h-full">
        <div class="flex flex-col mt-32 ml-64">
          <div>
            <Image
              src="/man.png"
              alt="Profile picture"
              class=" rounded-full border-2 border-white"
              width={200}
              height={200}
            />
          </div>
          <div class="mt-8 ml-20 font-bold text-black">Mr.X</div>
          <div class="ml-12 text-black">Web Developer</div>
        </div>
        <div class="w-96 h-32 m-40 text-gray-800  ">
        <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'>X </span>
           and I'm a <span className='text-[#5651e5]'>web developer </span> with a passion for
          creating seamless online experiences. With 2 years of experience in
          web development, I specialize in building user-friendly websites and
          web applications using modern technologies such as ReactJS, NextJS and
          NodeJS"
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
