import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

export default class Home extends Component {
    render() {
        return (
            /* here we pass a title prop, this will override the default title in the 
                Header.defaultprops {} */
            <Header title="amazing recipes">
                {/* this is a button, passed as children */}
                <Link to="/recipes" className="text-uppercase btn btn-secondary btn-lg mt-3">
                    search recipes
                </Link>
            </Header>
        )
    }
}
