import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Place from '../containers/Place';
import Player from '../containers/Player';
import Explore from '../containers/Explore';
import Layout from '../components/Layout';
import Site from '../containers/Site';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/place/:id" component={Place} />
                <Route exact path="/player/:id" component={Player} />
                <Route exact path='/site' component={Site}/>
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;