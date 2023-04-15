import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';




function App() {

  function Phone(serial, name, price) {
    this.serial = serial
    this.name = name
    this.price = price
    this.newName = (newName) => {
      this.name = newName
    }
  }

  const phone1 = new Phone(123, 'samsung', 3000)
  let str = 'hell'
  phone1.newName('oppo')
  console.log(phone1.name);
  phone1.age = 24
  console.log(phone1);


  return (
    <>
      <Routes>
        <Route path='/template' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
