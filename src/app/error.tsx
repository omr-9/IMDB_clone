"use client";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="hover:bg-amber-400 bg-amber-600 py-2 px-4 rounded-xl my-5 text-lg font-semibold duration-200 "
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
