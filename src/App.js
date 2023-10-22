import './App.css';
import './css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Layout/Header';
import Banner from './Layout/Banner';
import Item from './Layout/Item';
import Footer from './Layout/Footer';


function App() {
  return (
    <div >
      <div className="CustomContainer">
      <Header />
      <Banner />
      <Item/>
      </div>
      <Footer />
    </div>
  );
}


export default App;
