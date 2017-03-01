import React from 'react';
import FontAwesome from 'react-fontawesome';

class Comment extends React.Component {
  render() {
    let {comment} = this.props;
    return (
      <div className="block-comment">
        <p>{comment._content}</p>
        <h4 className="text-left"><FontAwesome name='comment'/> by {comment.authorname}</h4>
      </div>
    )
  }
};

export default Comment;
