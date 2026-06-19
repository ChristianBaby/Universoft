import { Hero } from "@/components/sections/home/Hero";
import { ValueProposition } from "@/components/sections/home/ValueProposition";
import { ServicesSummary } from "@/components/sections/home/ServicesSummary";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { CtaFinal } from "@/components/sections/home/CtaFinal";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <ServicesSummary />
      <WhyUs />
      <CtaFinal />
    </main>
  );
}
