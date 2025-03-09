import { useEffect } from 'react';
import { CardsProvider } from './src/context/cardsContext';
import AppNavigation from './src/navigator/appNavigation';
import { lockOrientation } from './src/modules/orientation';


export default function App() {
  useEffect(() => {
    lockOrientation()
  }, [])

  return (
    <CardsProvider>
      <AppNavigation />
    </CardsProvider>
  );
}

