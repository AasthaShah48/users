import './App.css';
import AddUser from './components/AddUser';
import UserDetails from './components/UserDetails';
import {Routes , Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
          <Route path="/" exact element={<UserDetails />} />
          <Route path="/users/add" exact element={<AddUser />} />
          <Route path="/users/edit/:id" element={<AddUser />} />
          <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
