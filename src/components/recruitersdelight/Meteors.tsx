"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { HeroType } from "../Hero/hero.types";
import MorphingText from "../ui/morphing-text";
import { SparklesPreview } from "./Sparkles";

export function MeteorDemo({
  heroInfo,
  isLoading = true,
}: {
  heroInfo: HeroType;
  isLoading: boolean;
}) {
  // Split the introduction string by commas to check for multiple introductions
  const introductions = heroInfo.introduction
    ? heroInfo.introduction.split(",").map((item) => item.trim())
    : ["Default introduction"];

  return (
    <>
      {isLoading ? (
        // Skeleton or loading state
        <div></div>
      ) : (
        // Content when not loading
        <div className="mt-10 relative w-full h-screen overflow-hidden flex justify-center flex-col">
          {/* Meteors */}
          <Meteors />

          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 relative z-20 font-bold tracking-tight">
            {heroInfo.message}
          </h2>

          {/* Morphing Text for introduction */}
          {introductions.length > 1 ? (
            <MorphingText
              texts={introductions} // Use the array of introductions for morphing
              className="text-lg md:text-3xl lg:text-4xl mb-0 text-center mt-3 font-bold text-black-900 dark:text-neutral-300 relative z-20"
            />
          ) : (
            <p className="text-lg md:text-3xl lg:text-4xl mb-4 py-4 text-center mt-2 font-bold text-black-900 dark:text-neutral-300 relative z-20">
              {introductions[0]}
            </p>
          )}

          <p className="max-w-xl mb-4 mx-auto text-sm md:text-lg text-center text-black-900 dark:text-neutral-400 relative z-20">
            {heroInfo.description}
          </p>
          <SparklesPreview />
        </div>
      )}
    </>
  );
}
