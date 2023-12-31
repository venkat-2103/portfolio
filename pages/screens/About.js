import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div class="bg-blue-100 fixed top-0 h-full">
      <div>
        <Header></Header>
      </div>
      <div class="m-32 rounded-lg font-sans bg-gray-100 text-gray-800 text-xl p-32">
        <h1 class =" text-6xl text-black text-center m-8 font-bold">ABOUT MYSELF</h1>
        <p class="text-base">
          Hello, my name is Mr.X, and I'm a web developer with a passion for
          creating seamless online experiences. With 2 years of experience in
          web development, I specialize in building user-friendly websites and
          web applications using modern technologies such as HTML, CSS, and
          JavaScript, ReactJS, NextJS, TailwindCSS, NodeJS, ExpressJS. I have a
          strong foundation in front-end development, including frameworks like
          React, and I'm also proficient in back-end technologies like Node.js.
          I enjoy collaborating with cross-functional teams to bring innovative
          ideas to life and deliver high-quality code. I stay up-to-date with
          industry trends and best practices to ensure that I'm always
          implementing the latest techniques and technologies in my work. I'm
          excited to leverage my skills and experience to contribute to your
          team and create impactful digital solutions.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
