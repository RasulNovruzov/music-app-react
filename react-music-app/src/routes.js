import React from "react";
import { Switch, Route } from 'react-router-dom';
import Contact from "./components/Contact/Contact";
import DetailsAlbum from "./components/detailsAlbum";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/home";
//import App from "./App";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" exact component={DetailsAlbum} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/contacts" exact component={Contact} />
        </Switch>
    )
}

export default Routes;