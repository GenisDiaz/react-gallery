import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <div className="alert alert-danger">
          <p>{this.props.page.text.message}</p>
      </div>
    )
  }
};

export default Error;
