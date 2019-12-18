import moment from "moment";

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import Comments from "../../components/Comments/Comments";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage";

import r from "../../utils/redditapi";

import "./RedditPostPage.css";

export default class RedditPostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
      error: false
    };
  }

  componentDidMount() {
    const after = post => this.setState({ post });
    const error = () => this.setState({ error: true });

    /* To get all comments we can use:
     *  .expandReplies({ limit: Infinity, depth: Infinity })
     *  But this takes a while
     */
    r.getSubmission(this.props.match.params.postid)
      .fetch()
      .then(after)
      .catch(error);
  }

  renderPageContent() {
    const { post, error } = this.state;
    console.log(post);

    if (error) {
      return <ErrorMessage />;
    }

    if (!post) {
      return <LoadingMessage />;
    }

    return (
      <Fragment>
        <h4>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
        <p>
          {post.score} by {post.author.name} on{" "}
          {moment(post.created_utc, "X").fromNow()}
        </p>
        <Comments comments={post.comments} />
      </Fragment>
    );
  }

  render() {
    const { post } = this.state;

    return (
      <div className="post-page" style={{ marginLeft: 20, marginRight: 20 }}>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            {post ? post.id : "Loading ..."}
          </BreadcrumbItem>
        </Breadcrumb>
        {this.renderPageContent()}
      </div>
    );
  }
}
