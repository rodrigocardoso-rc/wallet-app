import { CardsProvider } from './src/context/cardsContext';
import AppNavigation from './src/navigator/appNavigation';


export default function App() {
  return (
    <CardsProvider>
      <AppNavigation />
    </CardsProvider>
  );
}

