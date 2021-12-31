import React, {useState} from 'react'
import Header from './components/Header.component'
import Cards from './components/Cards.component'
import Footer from './components/Footer.component'
import './App.css';

function App() {

  const [timeframe, setTimeframe] = useState("daily")

  return (
    <div class="container">
      <main>
        <Header view={setTimeframe}/>
        <Cards timeframe={timeframe}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
