import { useEffect } from 'react';
import { CardsProvider } from './src/context/cardsContext';
import AppNavigation from './src/navigator/appNavigation';
import { lockOrientation } from './src/modules/orientation';
import { FlashMessage } from './src/modules';


export default function App() {
  useEffect(() => {
    lockOrientation()
    FlashMessage.show({ message: 'Bem vindo ao Wallet Test', type: 'success' })
  }, [])

  return (
    <CardsProvider>
      <AppNavigation />
      <FlashMessage.default />
    </CardsProvider>
  );
}

