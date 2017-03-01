import React from 'react';

class ButtonMorePhoto extends React.Component {
  render() {
    const { page, nextPage } = this.props;
    if (page.pages > page.current_page) {
      return (
        <a
          className="btn btn-xs btn-default"
          href="javascript:;"
          role="button"
          onClick={nextPage.bind(null, page.current_page)}
          >More photos
        </a>
      )
    } else {
      return (
        <p>No more photos</p>
      );
    }
  }
};

export default ButtonMorePhoto;
