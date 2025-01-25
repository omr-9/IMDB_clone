import Pagination from "@/components/Pagination";
import Skeleton from "@/components/Skeleton";
import { getAllMovies } from "@/lib/api";
import React, { lazy, Suspense } from "react";

const Results = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 5000)).then(
    () => import("@/components/Results")
  )
);

export default async function Home({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const page = params?.page || 1;
  const res = await getAllMovies(Number(page));
  const { results, total_pages: totalPages } = res;

  return (
    <div>
      <Suspense fallback={<Skeleton length={20} />}>
        <Results results={results} />
      </Suspense>
      <Pagination currentPage={Number(page)} totalPages={totalPages} />
    </div>
  );
}
