import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

//for react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import Default from './pages/Default';
import Navbar from './components/Navbar'


class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navbar />
                    <Switch> 
                        {/* exact, for when url's have matching starting bit  */}
                        
                        <Route path="/" exact component={Home}/>
                        <Route path="/recipes" exact component={Recipes}/>
                        <Route path="/recipes/:id" component={SingleRecipe}/>
                        {/* if we can't find the url, then display default */}
                        <Route component={Default} />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App