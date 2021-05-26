import { Empty } from './components/empty/Empty';
import { Header } from './components/Header';
import { Recipes } from './components/Recipes';
import { Settings } from './components/settings/Settings';
import './styles/main.scss';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Empty/>
    </div>
    
  );
}

export default App;
