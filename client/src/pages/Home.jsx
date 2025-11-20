import Hero from "../components/Hero";
import Products from "../pages/Products";
import { motion } from "framer-motion";
import Feature from "./Feature";

export default function Home() {
  return (
    <div className="relative top-0">
      <Hero />
      <Feature />
      <Products />
    </div>
  );
}
