"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technology from "@/components/Technologies";

import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
        <Hero />
        <Technology />
      </Suspense>
    </>
  );
}
