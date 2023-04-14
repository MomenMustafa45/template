import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';




function App() {

  const num = 1003567

  const insertNum = (num) => {

  }

  console.log(num.toString().split(''));
  console.log(num.toString().split('').reduce((p, c) => p % 2 !== 0 && c % 2 !== 0 ? p + '-' + c : p + c));

  return (
    <>
      <Routes>
        <Route path='/template' element={<Home />} />
      </Routes>



    </>
  );
}

export default App;
