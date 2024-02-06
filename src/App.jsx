import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard';
import Home from "./components/Home";
import {  useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in
    fetch("/sessions")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('User not logged in');
        }
      })
      .then((user) => setUser(user))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home/>} />
          <Route exact path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
