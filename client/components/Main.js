import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <h1>
          <Link to="/">
            Weird Objects
          </Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
