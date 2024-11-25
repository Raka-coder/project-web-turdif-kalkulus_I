// Component
import { ThemeProvider } from "./components/ThemeDarkMode/ThemeContext";
import Navbar from "./components/NavMenu/Navbar";
import HomeMenu from "./components/Homes/Home";
import Materi from "./components/Materi/Materi";
import CardTeams from "./components/Card/CardTeam";
import Footer from "./components/Footer/Footer";

// Calculator
import DerivativeCalculator from "./components/Calculator/Turunan";
import KalkulatorTurunanCampuran from "./components/Calculator/TurunanLog";
import KalkulatorTurunanTrigonometri from "./components/Calculator/TurunanTrigonometri";
import KalkulatorTurunanEksponensial from "./components/Calculator/TurunanEksponensial";

// Style
import "./assets/fonts/fonts.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <div>
          <Navbar />
          <HomeMenu />
          <Materi />
          <DerivativeCalculator />
          <KalkulatorTurunanCampuran />
          <KalkulatorTurunanTrigonometri />
          <KalkulatorTurunanEksponensial />
          <CardTeams />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
