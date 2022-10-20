import React, { Component } from 'react';

class Square extends Component {

  render() {

    return (
        <button className="bg-white border float-left text-xl h-8 w-8 m-0 p-0 text-center" onClick={this.props.onClick}>
            {this.props.value}
        </button>
    );
  }
}
export default Square;