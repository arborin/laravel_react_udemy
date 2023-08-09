
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavitation from './components/TopNavitation/TopNavitation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';


function App() {
  return (
    <>
      <TopNavitation />
      <TopBanner />
      <Analysis />
      <Summary />
    </>
  );
}

export default App;
