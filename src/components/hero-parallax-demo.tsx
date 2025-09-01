"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { heroParallaxProducts } from "@/data/hero-parallax-data";

export default function HeroParallaxDemo() {
  return <HeroParallax products={heroParallaxProducts} />;
}
