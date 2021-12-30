import Header from './components/Header.component'
import Cards from './components/Cards.component'
import Footer from './components/Footer.component'
import './App.css';

function App() {

  return (
    <div class="container">
      <main>
        <Header />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
