import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.delete(this.props.restaurant.id)} > X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
