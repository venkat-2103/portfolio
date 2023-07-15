import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/screens/Register");
  };

  return (
    <div className="bg-blue-100 font-sans">
      <Header></Header>
      <div className="flex justify-center items-center h-screen">
        <div class="w-1/2 bg-blue-100 ">
          <div class="text-black italic text-6xl font-bold font-serif flex items-center justify-center h-full">
            Welcome!
          </div>
          <div class=" p-8 text-4xl font-mono text-gray-800 flex items-center justify-center h-full">
            Create your own PortFolio here
          </div>
        </div>
        <div class="w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-1/2 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div class="font-sans flex w-full h-full">
              <div class="text-black text-base m-2">Don't have an account?</div>
              <div>
                <button
                  onClick={handleClick}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
