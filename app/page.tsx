"use client"

import SearchForm from "@/components/SearchForm/SearchForm";
import { GiCommercialAirplane } from 'react-icons/gi';
import { FaDropbox } from 'react-icons/fa';
import { AiOutlineLoading } from 'react-icons/ai';
import { Flight } from "./SearchModel";
import { useState } from "react";
import FlightCard from "@/components/FlightCard";
import FlightTitleCard from "@/components/FlightTitleCard";
import BigCard from "@/components/BigCard";

export default function Home() {
  const [searchResult, setSearchResult] = useState<Array<Flight>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="relative z-20 flex flex-col lg:flex-row items-center lg:items-stretch lg:justify-center gap-8 mt-20">
      <div className="bg-white w-[90vw] lg:w-[30vw] rounded shadow-2xl p-6 ">
        <SearchForm setSearchResult={setSearchResult} setIsLoading={setIsLoading} />
      </div>
      {isLoading && <BigCard>
        <AiOutlineLoading className="text-primary animate-spin text-4xl" />
      </BigCard>}
      {!isLoading && <>
        {!searchResult && <BigCard>
          <GiCommercialAirplane className={'text-primary'} />
          <h1>Result Side!!</h1>
        </BigCard>}
        {searchResult && searchResult.length == 0 && <BigCard>
          <FaDropbox className={'text-primary'} />
          <h1>No results found.</h1>
        </BigCard>}
        {searchResult && searchResult.length > 0 && <div className="w-[90vw] lg:w-[50vw] space-y-2">
          <FlightTitleCard />
          {searchResult.map((el, index) => {
            return <FlightCard key={index + 'flightCard'} flight={el} />
          })}
        </div>}
      </>}
    </main >
  )
}
