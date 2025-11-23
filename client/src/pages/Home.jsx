import Hero from "../components/Hero";
import Feature from "./Feature";
import Products from "./Products";
import About from "./About";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Hero />
      <Feature />
      <Products />
      <About />
    </div>
  );
}
