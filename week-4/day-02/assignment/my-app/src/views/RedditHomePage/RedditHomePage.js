import React, { Component, Fragment } from "react";
import {
  Row,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage";
import PostCard from "../../components/PostCard/PostCard";

import r from "../../utils/redditapi";

import "./RedditHomePage.css";

export default class RedditHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      sort: "hot",
      error: false
    };
  }

  componentDidMount() {
    this.getPosts(this.state.sort);
  }

  getPosts(sort) {
    const after = posts => this.setState({ sort, posts });
    const error = () => this.setState({ error: true });

    switch (sort) {
      case "hot": {
        r.getHot()
          .then(after)
          .catch(error);
        break;
      }
      case "top": {
        r.getTop()
          .then(after)
          .catch(error);
        break;
      }
      case "new": {
        r.getNew()
          .then(after)
          .catch(error);
        break;
      }
      case "Controversial": {
        r.getControversial()
          .then(after)
          .catch(error);
        break;
      }
      default: {
        return;
      }
    }
  }

  setSort = sort => {
    this.setState({ sort, posts: [] });
    this.getPosts(sort);
  };

  renderListing = listing => <PostCard key={listing.id} listing={listing} />;

  render() {
    const { sort, posts, error } = this.state;
    return (
      <div className="home-page">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <ButtonGroup style={{ marginBottom: "20px" }}>
          <Button
            active={sort === "hot"}
            disabled={posts.length === 0}
            onClick={() => this.setSort("hot")}
          >
            Hot
          </Button>
          <Button
            active={sort === "top"}
            disabled={posts.length === 0}
            onClick={() => this.setSort("top")}
          >
            Top
          </Button>
          <Button
            active={sort === "new"}
            disabled={posts.length === 0}
            onClick={() => this.setSort("new")}
          >
            New
          </Button>
          <Button
            active={sort === "controversial"}
            disabled={posts.length === 0}
            onClick={() => this.setSort("controversial")}
          >
            Controversial
          </Button>
        </ButtonGroup>
        {error ? (
          <ErrorMessage />
        ) : (
          <Row style={{ marginLeft: "20px", marginRight: "20px" }}>
            {posts.length === 0 ? (
              <LoadingMessage />
            ) : (
              <Fragment>{posts.map(this.renderListing)}</Fragment>
            )}
          </Row>
        )}
      </div>
    );
  }
}
