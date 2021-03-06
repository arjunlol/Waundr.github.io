import React, { Component } from 'react';
import { Modal, Button, Row, Input, Icon, Col} from 'react-materialize';

let opac = 1;

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      discover: 'Meet Ups'
    }
  }

  componentDidMount(prevProps, prevState) {

    // setInterval(() => {
    //   for (let i = 1; i > 0; i -= 0.1) {
    //     setTimeout(() => {
    //       opac = i;
    //       this.forceUpdate()
    //     }, 200)
    //   }
    //   for (let i = 0; i < 1; i += 0.1) {
    //     setTimeout(() => {
    //       opac = i;
    //       this.forceUpdate()
    //     }, 200)
    //   }

    // }, 1500)

    let counter = counter ? counter : 0
    setInterval(() => {
      switch (counter) {
        case 0 :
          this.setState({discover: 'Meet Ups'})
          break;
        case 1:
          this.setState({discover: 'Garage Sales'})
          break;
        case 2:
          this.setState({discover: 'Concerts'})
          break;
        case 3:
          this.setState({discover: 'Street Markets'})
          break;
        case 4:
          this.setState({discover: 'Obstacles'})
          break;
        case 5:
          this.setState({discover: 'Concerts'})
          counter = -1;
          break;
      }
      counter++;
    }, 1500)
  }

  render(){

      return(
        <div>
          <main id='main' className='main_area'>
            <div className='center'>
              <div style={{'backgroundColor': 'rgba(0,0,0,0.6)', 'padding': 50}}>
              <img src="../styles/Waundr-logo (wht).png"/>
                <div style={{'marginTop': '-4em'}}>
                  <h4>The real time social walking experience</h4>
                  <h5 style={{'color':'white', 'opacity': opac}} >Discover {this.state.discover}</h5>
                </div>
                <div style={{'margin-top':'2em'}}>
                  <button className="loginBtn loginBtn--google">
                    <a href='https://cryptic-plains-45907.herokuapp.com/users/auth/google'>Login with Google</a>
                  </button>
                  <button className="loginBtn loginBtn--facebook">
                    <a href='https://cryptic-plains-45907.herokuapp.com/users/auth/facebook'>Login with Facebook</a>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }
  }

export default Login
