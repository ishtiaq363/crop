import Image from "next/image";
import Hero from "@/components/hero";
import Link from "next/link";
import homeImg from 'public/images/home.jpg';
export default function Home() {
  return <>
   <Hero imgData={homeImg} imgAlt="car factory" title="Professional Cloud Hosting"/>
   
   </>
}
