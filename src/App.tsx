import { Landing } from './pages';
import './App.css';
import { AppProvider } from './components';

function App() {
  return (
    <AppProvider>
      <Landing />;
    </AppProvider>
  );
}

export default App;
