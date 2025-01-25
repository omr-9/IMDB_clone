import React from "react";

const CardSkeleton = () => {
  return (
    <div className="my-2 cursor-pointer transition-all duration-300 sm:shadow-md rounded-lg sm:border-slate-400 ease-in-out">
      <div>
        {/* Placeholder for Image */}
        <div className="bg-gray-300 sm:h-36 w-full rounded-t-lg animate-pulse"></div>
      </div>
      <div className="p-2">
        {/* Placeholder for Overview */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
        </div>
        {/* Placeholder for Title */}
        <div className="h-6 bg-gray-300 rounded my-2 animate-pulse w-2/3"></div>
        {/* Placeholder for Release Date and Vote Count */}
        <div className="flex items-center mt-2">
          <div className="h-4 bg-gray-300 rounded animate-pulse w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse w-1/4 ml-3"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;