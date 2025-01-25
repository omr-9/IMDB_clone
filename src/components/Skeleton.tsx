import React from "react";
import CardSkeleton from "./CardSkeleton";

const Skeleton = ({ length }: { length: number }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto py-4">
    {Array.from({ length: length }).map((_, index) => (
      <CardSkeleton key={index} />
    ))}
  </div>
  );
};

export default Skeleton;