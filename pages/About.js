import Layout from "../pages/Layout";
import Link from "next/link";

function About() {
  return (
    <div>
      <Layout></Layout>
      <div class=" h-64 font-mono text-xl m-32 p-8 space-x-4">
        <h1 class=" text-center font-bold">About</h1>
        <p>
          Thomas Stanley Holland is an English actor. His accolades include a
          British Academy Film Award and three Saturn Awards. Some publications
          have called him one of the most popular actors of his generation.
          <Link
            class="text-blue-600"
            href="https://en.wikipedia.org/wiki/Tom_Holland"
          >
            Wikipedia
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
