import { fetchGames } from '@/actions'
import GameList from '@/components/GameList'
import { Loader2Icon } from 'lucide-react';
import React from 'react'

const Home = async () => {
  const data = await fetchGames();

  if (!data.results) {
    return (
      <div>
        <Loader2Icon className="animate-spin size-8" />
      </div>
    );
  }

  const games = data.results;


  return (
    <div className='flex-1 w-full space-y-8'>
      <GameList games={games}/>
    </div>
  )
}

export default Home