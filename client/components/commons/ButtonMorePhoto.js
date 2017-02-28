import React from 'react';

const ButtonMorePhoto = React.createClass({
  render() {
    const { page, nextPage } = this.props;
    console.log('ButtonMorePhoto',page);
    return (
      <a 
          className="btn btn-xs btn-default" 
          href="javascript:;" 
          role="button"
          onClick={nextPage.bind(null, page.current_page)}
          >More photos</a>
    )
  }
});

export default ButtonMorePhoto;
