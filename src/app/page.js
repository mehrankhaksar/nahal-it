import Cooperations from "@/components/Cooperations";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <Cooperations />
    </main>
  );
}
