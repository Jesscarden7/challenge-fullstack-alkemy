import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TransactionsList from './components/TransactionsList';
import TransactionsRegister from './components/TransactionsRegister';
import UserLogin from './components/UsersLogin';
import UsersRegister from './components/UsersRegister';
import { Routes, Route } from "react-router-dom";
import globalContext from "./context/globalContext";
import { ProtectedRoute } from './components/ProtectedRoute';


function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <globalContext.Provider value={{loggedUser: loggedUser, setLoggedUser: setLoggedUser}}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
          <Route path="/transactionList" element = {
            <ProtectedRoute>
              <TransactionsList/>
            </ProtectedRoute> 
          }/>
          <Route path="/transactionRegister" element = {
            <ProtectedRoute>
              <TransactionsRegister/>
            </ProtectedRoute>
          }/>
          <Route path="/usersRegister" element = {<UsersRegister/>}/>
          <Route path="/userLogin" element = {<UserLogin/>}/>
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </div>
    </globalContext.Provider>
  );
}

export default App;
