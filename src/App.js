import React, {useState} from 'react'
import ProfileCard from './components/ProfileCard'
import TrackingCards from './components/TrackingCards'
import Footer from './components/Footer'
import './App.css';

function App() {

  const [timeframe, setTimeframe] = useState("daily")

  return (
    <div class="container">
      <main>
        <ProfileCard timeframe={timeframe} view={setTimeframe}/>
        <TrackingCards timeframe={timeframe}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;