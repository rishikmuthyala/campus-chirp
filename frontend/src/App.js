import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Navigation user={user} setUser={setUser} />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" render={(props) => <Login {...props} setUser={setUser} />} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" render={(props) => <Dashboard {...props} user={user} />} />
            </Switch>
        </Router>
    );
}

export default App;