
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavitation from './components/TopNavitation/TopNavitation';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
import Video from './components/Video/Video';
import ClientReview from './components/ClientReview/ClientReview';


function App() {
  return (
    <>
      <TopNavitation />
      <TopBanner />
      <Analysis />
      <Summary />
      <RecentProject />
      <Video />
      <ClientReview />
    </>
  );
}

export default App;
