import React, { Component } from 'react';
import './style.css';

class cards extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <br />
        <h1 className='text-center mb-3 headercontent'>
          Our <span>Reach</span>
        </h1>
        <br />
        <div className='row' style={{ justifyContent: 'space-evenly' }}>
          <div className='col-md-3'>
            <div className='text-white mb-3 cards2'>
              <div className='card-body color1'>
                <img
                  src={require('../assets/student.png')}
                  alt='student'
                  className='mx-auto d-block'
                />
                <br />
                <br />
                <h2 className='card-title text-center black'>30+</h2>
                <br />
                <h5 className='text-center'>CONTRIBUTORS</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='text-white mb-3 cards2'>
              <div className='card-body color2'>
                <img
                  src={require('../assets/calendar.png')}
                  alt='calender'
                  className='mx-auto d-block'
                />
                <br />
                <br />
                <h2 className='card-title text-center black'>90+</h2>
                <br />
                <h5 className='text-center'>FORKS</h5>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='text-white mb-3 cards2 media'>
              <div className='card-body color3'>
                <img
                  src={require('../assets/leadership.png')}
                  alt='leadership'
                  className='mx-auto d-block'
                />
                <br />
                <br />
                <h2 className='card-title text-center yellow'>30+</h2>
                <br />
                <h5 className='text-center'>STARS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default cards;
