import React, {useState} from 'react'
import ProfileCard from './components/ProfileCard'
import Cards from './components/Cards.component'
import Footer from './components/Footer'
import './App.css';

function App() {

  const [timeframe, setTimeframe] = useState("daily")

  return (
    <div class="container">
      <main>
        <ProfileCard timeframe={timeframe} view={setTimeframe}/>
        <Cards timeframe={timeframe}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;