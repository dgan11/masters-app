import Banner from './components/Banner';
import Leaderboard from './components/Leaderboard';
import FlightSelectionsTable from './components/FlightSelectionsTable';
import BestSelectionsTable from './components/BestSelectionsTable';
import Updates from './components/Updates';

// Get the data here, transform it as necessary, and pass it down



function App() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <Updates />
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
