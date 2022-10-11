import './style.css';
import Seats from './components/Seats';
import { Link } from 'react-router-dom'
import BookButton from './components/BookButton';
import PriceCounter from './components/PriceCounter';

function Home() {
  return (
    <main>
      <section>
        <Seats />
        <PriceCounter />
        <BookButton />
      </section>
      <Link to='/admin'>Zur Adminseite</Link>
    </main>
  );
}

export default Home;
