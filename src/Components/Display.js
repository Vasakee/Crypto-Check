import React from 'react'
import Line from './Line'

function Display({coins, searchCoins }) {
    const newList = coins.filter(coin=>
        coin.name.toLowerCase().includes(searchCoins.toLowerCase())
      )
  return (
    <div>
      {newList.map(coin =>{
        return <Line
         key={coin.id}
         id ={coin.id}
         image={coin.image}
         symbol={coin.symbol}
         price={coin.current_price}
          percentage={coin.price_change_percentage_24h}
          gains = {coin.price_change_24h}
        />
      })}
    </div>
  )
}

export default Display
