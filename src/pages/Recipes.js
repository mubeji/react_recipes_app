import React, { Component } from 'react'

import ReciepList from '../components/RecipeList'
import Search from '../components/Search'
//import dummy data
import { recipeData } from '../data/tempList'

export default class Recipes extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        recipesArr: recipeData,
        searchQuery:''
    }

    handleChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (

            <>
                <Search handleChange={this.handleChange}
                    searchQuery={this.state.searchQuery}
                    handleSubmit={this.handleSubmit}
                />
                <ReciepList recipesArr={this.state.recipesArr}/>
            </>
        )
    }
}
