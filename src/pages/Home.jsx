import '../style.css';
import Seats from '../components/Seats';
import { Link } from 'react-router-dom'
import PriceCounter from '../components/PriceCounter';
import EmailForm from '../components/EmailForm';

function Home() {
  return (
    <main>
      <section>
        <Seats />
        <PriceCounter />
        <EmailForm />
      </section>
      <Link to='/admin'>Zur Adminseite</Link>
    </main>
  );
}

export default Home;
