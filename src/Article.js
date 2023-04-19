import React from 'react';
import  PropTypes from 'prop-types';

/**
 * class component
 * props, default props, prop types
 */
class Article extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         quantity:1,
    //         price:1
    //     }
    // }

    constructor(props){
        super(props);
        this.state={
            quantity:1,
            price:1,
            productName:this.props.productName,
            price:this.props.price,
            rating:this.props.rating,
            availability:this.props.availability,
            colours:this.props.colours
        }
    }
    clickEvent=(e)=>{
        this.setState({quantity:this.state.quantity*2},()=>{
            if(this.state.quantity>4){
                this.setState({price:this.state.price+2000});
            }
        });
    }

    render(){
        return <React.Fragment>
            <h3>Article name is {this.state.productName}</h3>
            <h3>Price {this.state.price}</h3>
            <h3>Rating {this.state.rating}</h3>
            <h3>Availability {(this.state.availability).toString()}</h3>    

            {(this.state.colours).map((e)=>{
                return <h4>{e}</h4>
            })}

            <h3>quantity {this.state.quantity}</h3>
            <button onClick={this.clickEvent}>click to update</button>
        </React.Fragment>
    }
}

Article.defaultProps={
    productName:"Apple iphone 15",
    price:80000,
    rating:4.3,
    availability:true,
    colours:["black","white"]
};

Article.propTypes = {
    productName: PropTypes.string.isRequired,
    price: PropTypes.number,
    colors: PropTypes.array,
    availability: PropTypes.bool,
    rating: PropTypes.number
    // addToCart: PropTypes.func
};

  
export default Article;