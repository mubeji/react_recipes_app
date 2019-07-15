import React, { Component } from 'react'
// Get the dummy data
import { recipeData } from '../data/tempDetails'
import { Link } from 'react-router-dom'

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props)
        // console.log("SingleReciep props",this.props.match.params.id )
        // id from the Recipe component
        const id = this.props.match.params.id
        this.state = {
            //recipe: recipeData, // get dummy data
            recipe: {},
            id, 
            // To let the user know while waiting
            loading: true
        }
    }

    async componentDidMount() {
        // The key is from the .env.development file in the root
        const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_APP_KEY}&rId=${this.state.id}`
        
        try {
            const response = await fetch(url)
            const responseData = await response.json()
            console.log('responseData', responseData)
            console.log('response', response)
            this.setState({
                recipe: responseData.recipe,
                loading: false
            })
        } 
        catch (error) {
            console.log('Oh!!!!',error)
        }
    }
    
    render() {
        // console.log("SingleRecipe props:",this.props)
        console.log('state:',this.state)
        const { 
            image_url, 
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe

        // let ingredients_arr = ingredients.map((item, index) => {
        //     return (
        //         <li key={index} className="list-group-item text slanted">
        //             {item} 
        //         </li>
        //     )
        // })

        if (this.state.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2 className="text-uppercase text-orange text-center">
                                loading recipe...
                            </h2>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize">
                            back to recipes
                        </Link>
                        <img src={image_url} 
                            className="d-block w-100" 
                            style={{maxHieght: "30rem"}} 
                            alt="recipe"
                        />
                    </div>
                    {/* Recipe info */}
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase ">{title}</h6>
                        <h6 className="text-warning text-capitalize text-slanted">
                            provided by {publisher}
                        </h6>
                        <a href={publisher_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary mt-2 text-capitalize"
                        >
                            publisher webpage
                        </a>
                        <a href={source_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-success mt-2 mx-2 text-capitalize"
                        >
                            recipe url
                        </a>
                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4 ">Ingredients</h2>
                            {ingredients.map((item, index) => {
                                return (
                                    <li key={index} className="list-group-item text slanted">
                                        {item} 
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        
        )
    }
}
