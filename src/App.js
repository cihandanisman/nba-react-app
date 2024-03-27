
import './App.scss';
import PlayerCard from './components/Card/PlayerCard';
import Header from './components/Header/Header';
import CardContainer from './components/cardContainer/CardContainer';
import "../src/components/Header/header.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />

    </div>
  );
}

export default App;
