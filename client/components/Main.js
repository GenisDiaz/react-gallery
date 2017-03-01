import React from 'react';
import { Link } from 'react-router';
import Error from './commons/Error';

class Main extends React.Component {
  render() {
    const { page } = this.props;
    console.log(page);
    return (
      <div className="container-fluid">
        <h1>
          <Link to="/">
            Weird Objects
          </Link>
        </h1>
        { page.error ? <Error {...this.props}/> : React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
};

export default Main;
