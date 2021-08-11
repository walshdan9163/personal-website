import './css/Homepage.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function Homepage() {
  return (
    <div className="Homepage">
        <Header />
      <div className="Content">
        <Content />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
