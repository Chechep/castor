import Hero from "../components/Hero";
import Products from "../pages/Products";
import { motion } from "framer-motion";
import Feature from "./Feature";
import About from "../pages/About";

export default function Home() {
  return (
    <div className="relative top-0 bg-white dark:bg-black">
      <Hero />
      <Feature />
      <Products />
      <About />
    </div>
  );
}
