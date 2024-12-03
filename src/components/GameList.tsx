import React from 'react'
import GameCard from './GameCard'

const GameList = ({ games }: { games: Game[] }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
  )
}

export default GameList