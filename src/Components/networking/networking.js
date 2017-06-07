import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios"


export default class Networking extends React.Component {
	constructor(props){
		super(props)

  this.fetchUser = this.fetchUser.bind(this);
  }


 fetchUser() {


    axios.get('http://127.0.0.1:3004/')
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  }



  render() {

    return(
      <h1 src ="ftp://andell.eu:birde@andell.eu/Andell/" onClick={this.fetchUser} >zdasdsd </h1>
    )

  }
}
