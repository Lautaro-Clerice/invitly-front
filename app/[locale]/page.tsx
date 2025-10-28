import { Suspense, lazy } from "react";
import Hero from "@/components/features/home/Hero";

const Categories = lazy(() => import("@/components/features/home/Categories"));
const Features = lazy(() => import("@/components/features/home/Features"));

import { CategoriesSkeleton } from "@/components/shared/skeletons/CategoriesSkeleton";
import { FeaturesSkeleton } from "@/components/shared/skeletons/FeaturesSkeleton";

export const revalidate = 3600;

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>
    </div>
  );
}
