import style from "./App.module.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <div className={style.content_wrapper}>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
