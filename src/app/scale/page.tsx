import Image from "next/image";
import Hero from "@/components/hero";
import Link from "next/link";
import scaleImg from 'public/images/scale.jpg';
export default function ScalePage() {
  return <>
   <Hero imgData={scaleImg} imgAlt="steel factory" title="Scale your app to infiniity."/>
   
   </>
}
