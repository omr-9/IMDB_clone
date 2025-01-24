import { Media } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }: { result: Media }) => {
  console.log(result.id);
  return (
    <div className="my-2 group curor-pointer  transition-all duration-300 sm:shadow-slate sm:shadow-md rounded-lg sm:border-slate-400 ease-in-out">
      <Link href={`/movies/${result.id}`}>
        <div>
          <Image
            src={`${
              result.backdrop_path || result.poster_path
                ? `https://image.tmdb.org/t/p/w500${
                    result.backdrop_path || result.poster_path
                  }`
                : ""
            }`}
            alt={result.title || result.name || "Poster"}
            width={500}
            height={500}
            className="object-cover  sm:h-36 group-hover:opacity-80 sm:rounded-t-lg w-full transition duration-300 "
          />
        </div>
        <div className="p-2">
          <p className="text-sm line-clamp-3">{result.overview}</p>
          <h2 className="font-bold truncate my-2 text-sm">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-xs">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
