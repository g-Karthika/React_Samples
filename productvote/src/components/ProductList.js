import React from 'react'

import Product from './Product'



//import feedback from '../data'
import axios from 'axios'
import feedback from '../data';



class ProductList
    extends React.Component {

    constructor() {

        super()

        this.state = {

            products: feedback

        }

        this.voteClicked = this.voteClicked.bind(this)

    }

    /* componentWillMount(){
        this.getApiData()
    }

    getApiData(){
        axios.get("http://localhost:3000/feedback").then((response)=>
    {
        this.setState({products: response.data})
    })
    } */
    voteClicked(id, check) {

        console.log(("upvote clicked for id: " + id))


        const updatedProducts =
            this.state.products.map((p1) => {

                if (p1.id ===
                    id && check === 1) {

                    return Object.assign({}, p1, { vote: p1.vote + 1 })

                } else if (p1.id ===
                    id && check === 0) {

                    return Object.assign({}, p1, { vote: p1.vote - 1 })

                }

                else {

                    return p1

                }

            })

        this.setState({ products: updatedProducts })

        console.log(this.state.products)

    }


    render() {

        // const product=feedback

        // console.log(product)



        const sortedProduct = this.state.products.sort((a, b) => (

            a.vote - b.vote

        ))



        const allproducts = sortedProduct.map((p) => {

            return (

                <Product

                    key={p.id}

                    id={p.id}

                    title={p.title}

                    description={p.description}

                    url={p.url}

                    productImage={p.imageUrl}

                    avatarUrl={p.avatarUrl}

                    vote={p.vote}

                    onCheck={this.voteClicked}

                ></Product>

            )
        });



        return (

            <div
                className="ui unstackable items">

                {allproducts}

            </div>

        );

    }

}


export default
    ProductList;

