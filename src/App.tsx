import { Text, Container } from '@mantine/core';

import { Body } from './components/Body';

function App() {
  return (
    <Container size={450} pt="40px">  
      <Text 
        fw={700} 
        fz="xl" 
        color="grey" 
        pb="10px">
          Переводчик
          </Text>
        <Body/>
    </Container>   
  )
}

export default App;
