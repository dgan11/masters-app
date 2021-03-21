import Banner from './components/Banner';
import Leaderboard from './components/Leaderboard';
import FlightSelectionsTable from './components/FlightSelectionsTable';
import BestSelectionsTable from './components/BestSelectionsTable';

function App() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <Leaderboard />
      </div>
      <div>
        <FlightSelectionsTable />
      </div>
      <div>
        <BestSelectionsTable />
      </div>
    </>
  );
}

export default App;
