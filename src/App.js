//import './App.css';
import DashBoard from './Components/DashBoard';
import { Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Box alignItems={'center'} bg={'black'} color={'white'} H={'100vh'} bgSize={'cover'} w={{ base: '100vw', md: '100vw' }} overflowX='hidden' className="App">
      <Heading as={'h1'} fontSize={'5xl'} className='head' color={'aqua'}>Crypto-Check</Heading>
      <DashBoard />
    </Box>
  );
}

export default App;
