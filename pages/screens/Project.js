import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function Project() {
  const router=useRouter();
  const handleclick=()=>{
    router.push("https://github.com/Thamizharasuvb/protfolio/tree/Thamizharasuvb-patch-2");
  };
  const handleClick = () => {
    router.push(
      "https://leetcode.com/problems/where-will-the-ball-fall/submissions/"
    );
  };

  return (
    <div class="bg-blue-100 text-black">
      <Header></Header>
      <div class="p-32">
        <div className="flex h-64 ">
          <div className="box shadow-lg rounded-lg text-center p-8 m-8 bg-gray-100 w-1/3">
            Project 1<div class="p-8 font-sans">Food Cart website</div>
            <button onClick={handleclick} class="hover:text-lg text-blue-600">view source</button>

          </div>
          <div className="box shadow-lg rounded-lg text-center p-8 m-8 bg-gray-100 w-1/3">
            Project 2<div class="p-8 ">A Real time chat Application</div>
            <button onClick={handleclick} class="hover:text-lg text-blue-600">view source</button>
          </div>
          <div className="box shadow-lg rounded-lg text-center p-8 m-8 bg-gray-100 w-1/3">
            Project 3<div class="p-8">Social Media App</div>
            <button onClick={handleclick} class="hover:text-lg text-blue-600">view source</button>
          </div>
        </div>
        <div class="text-center">
        <button
            onClick={handleClick}
            class="bg-orange-200 hover:bg-orange-300 text-black py-1 px-4 rounded"
          >
            +ADD PROJECT
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Project;
