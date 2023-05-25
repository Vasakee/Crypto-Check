import React, { useEffect, useState } from 'react'
import { Box, Input } from '@chakra-ui/react'
import axios from 'axios'
import Display from './Display'

function DashBoard() {
  const [coins, setCoins] = useState([])
  const [searchCoins, setSearchCoins] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=NGN&order=market_cap_desc&per_page=250&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      })
      .catch(err => {
        console.log(err)
        alert('Check your network connection')
      })
  }, [])

  const handleSearch = (e) => {
    setSearchCoins(e.target.value)
  }
  return (
    <Box minHeight={'100vh'} bgSize={'cover'} minWidth={'200vw'}>
      <Box className='top'>
        <Input w={'50vw'} h={10} type={'text'} value={searchCoins} onChange={handleSearch} placeholder='enter a coin...' m={4} />
      </Box>
      <Display coins={coins} searchCoins={searchCoins} />
    </Box>
  )
}

export default DashBoard
