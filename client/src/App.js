import './App.css';

import AddProducts from './components/AddProducts'
import ShowContainers from './components/ShowContainers';
import SearchContainer from './components/ShowContainers'

function App() {
  return (
    <div className='App'>
      <SearchContainer />
      <AddProducts />
      <ShowContainers />
    </div>
  );
}

export default App;
