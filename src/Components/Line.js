import React from 'react'
import { HStack, Center, Img, Text, StatGroup, StatArrow, Stat } from '@chakra-ui/react'

function Line({ image, symbol, id, price, percentage, gains }) {

  return (

    <HStack _hover={{ background: 'grey', color: 'white' }} overflowX='hidden' borderRadius="lg" alignItems={'center'} p={5} >
      <Center>
        <Img

          w={30}
          h={30}
          bgSize={'cover'}
          cursor="pointer"
          src={image}
          alt='pics'
        />
      </Center>
      <Center ><Text fontSize={'xl'}>{id.charAt(0).toUpperCase() + id.slice(1).toLowerCase()}</Text></Center>
      <Center ><Text fontSize={'xl'}>{symbol.toUpperCase()}</Text></Center>
      <Center > <Text fontSize="xl">
        <b>NGN : </b>
        {price.toLocaleString()}
      </Text></Center>
      <Center >
        <StatGroup fontSize={'xl'}>
          <Stat>
            <StatArrow type={percentage < 0 ? 'decrease' : 'increase'} />
            {percentage}%
        </Stat>
        </StatGroup>
      </Center>
      <Center mr={2} >
        <StatGroup fontSize={'xl'}>
          <Stat>
            <StatArrow type={gains < 0 ? 'decrease' : 'increase'} />
            <b>NGN</b>:{gains}
          </Stat>
        </StatGroup>
      </Center>

    </ HStack>
  )
}

export default Line
