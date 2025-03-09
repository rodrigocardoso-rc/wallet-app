import { useEffect } from 'react';

import { CardsProvider } from './src/contexts';
import { AppNavigator } from './src/navigators';
import { FlashMessage, Orientation } from './src/modules';

export default function App() {
  useEffect(() => {
    Orientation.lockOrientation()
    FlashMessage.show({ message: 'Bem vindo ao Wallet Test', type: 'success' })
  }, [])

  return (
    <CardsProvider>
      <AppNavigator />
      <FlashMessage.default />
    </CardsProvider>
  );
}

