import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>
          <Link to="/">
            Weird Objects
          </Link>
        </h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
};

export default Main;
