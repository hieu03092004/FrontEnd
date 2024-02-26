import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className="main">
        <Content  text="Content1"/>
        <MainContent />
        <Content text="Content2"/>
      </div>
      <Footer />
    </>
  );
}

export default App;
