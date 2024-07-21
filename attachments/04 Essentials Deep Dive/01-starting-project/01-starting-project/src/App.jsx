import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreCondepts.jsx';
import Examples from './components/Examples.jsx';

function App() {


  return (
    // Fragment로 div 대체
    // <Fragment>
    // Fragment도 안쓰고 그냥 빈 <>로도 대체 가능
    <>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    {/* </Fragment> */}
    </>
  );
}

export default App;
