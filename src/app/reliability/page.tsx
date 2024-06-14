import Image from "next/image";
import Hero from "@/components/hero";
import Link from "next/link";
import reliabilityImg from 'public/images/reliability.jpg';
export default function ReliabilityPage() {
  return <>
   <Hero imgData={reliabilityImg} imgAlt="reliability" title="Super high reliability hosting"/>
   
   </>
}
