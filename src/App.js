import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((val, idx) => {
        return <Contact key={idx} data={val} />;
      })}
      <Footer />
    </div>
  );
};

export default App;
