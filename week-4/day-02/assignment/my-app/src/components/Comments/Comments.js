import React from 'react';
import Collapsible from 'react-collapsible';

import "./Comments.css";
import "font-awesome/css/font-awesome.min.css";

const Trigger = ({ author, score }) => (
  <div className="comment-score">
    {author} ({score})
  </div>
);

export default class Comments extends React.Component {
  renderComment(comment) {
    const trigger = <Trigger author={comment.author.name} score={comment.score} />;

    return (
      <Collapsible key={comment.id} trigger={trigger} open={true}>
        <div className="comment-wrapper">
          <div className="comment-body">
            <div dangerouslySetInnerHTML={{ __html: comment.body_html }} />
          </div>
          <div className="comment-replies" style={{ marginLeft: '20px' }}>
            <Comments comments={comment.replies} />
          </div>
        </div>
      </Collapsible>
    );
  }

  render() {
    const { comments } = this.props;

    return (
      <div className="comment-list">
        {comments.map(this.renderComment)}
      </div>
    );
  }
}