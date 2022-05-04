import PaletaLista from 'components/PaletaLista/PaletaLista';
import Navbar from 'components/Navbar/Navbar';
import AdicionaPaletaModal from 'components/AdicionaPaletaModal/AdicionaPaletaModal';
import './Home.css';

function Home() {
  return <div className="Home">
      <Navbar />
      <div className="Home__container">
        <PaletaLista />
        <AdicionaPaletaModal />
      </div>
    </div>
  
}

export default Home;
