import React, { Component } from 'react'

import Recipe from './Recipe'

export default class RecipeList extends Component {
    render() {
        const { recipesArr } = this.props

    let recipesList = recipesArr.map((recipe) => { 
            return (
                <Recipe key={recipe.recipe_id}
                    recipe={recipe}
                />
            )
        })
        return (
            <>
                <div className="container py-5 ">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">recipe list</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    {recipesList}
                </div>
            </>
        )
    }
}
