import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
            this.unsubscribeFromAuth = auth.onAuthStateChanged(user => (
                this.setState({currentUser: user})
            ));
    }


    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact={true} path={'/'} component={HomePage}/>
                    <Route path={'/shop'} component={ShopPage}/>
                    <Route path={'/signin'} component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }

}

export default App;
