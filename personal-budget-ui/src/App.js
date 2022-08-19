import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TransactionsList from './components/TransactionsList';
import TransactionsRegister from './components/TransactionsRegister';
import UserLogin from './components/UsersLogin';
import UsersRegister from './components/UsersRegister';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/home" element = {<Home/>}/>
        <Route path="/transactionList" element = {<TransactionsList/>}/>
        <Route path="/transactionRegister" element = {<TransactionsRegister/>}/>
        <Route path="/usersRegister" element = {<UsersRegister/>}/>
        <Route path="/userLogin" element = {<UserLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
