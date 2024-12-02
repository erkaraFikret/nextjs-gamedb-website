"use client";

import { fetchGenres } from "@/actions";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import GenreItem from "./GenreItem";

const GenreList = () => {
    const [genres, setGenres] = useState<Genre[] | null>(null)

  useEffect(() => {
    fetchGenres().then((data) => setGenres(data.results));
  }, []);

  console.log(genres);

  if(!genres){
    return (
        <div>
            <Loader2Icon className="animate-spin w-8 h-8"/>
        </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 md:gap-4">
     {genres.map((genre) => (
        <GenreItem key={genre.id} genre={genre}/>
     ))}
    </div>
  );
};

export default GenreList;
