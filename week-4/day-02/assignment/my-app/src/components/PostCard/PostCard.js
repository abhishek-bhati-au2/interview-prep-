import React, { Component } from "react";
import {
  Col,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

const thumbnailTypes = ["nsfw", "default", "self", "image"];

export default class PostCard extends Component {
  render() {
    const { listing } = this.props;
    return (
      <Col md={4} key={listing.id} style={{ marginTop: "20px" }}>
        <Card>
          {!thumbnailTypes.includes(listing.thumbnail) ? (
            <CardImg
              top
              width={listing.thumbnail_width}
              height={listing.thumbnail_height}
              src={listing.thumbnail}
              alt={listing.title}
            />
          ) : null}
          <CardBody>
            <CardTitle>{listing.title}</CardTitle>
            <CardSubtitle>
              <strong>Score: {listing.score}</strong> by {listing.author.name}{" "}
              to {listing.subreddit_name_prefixed}
            </CardSubtitle>
            <CardText>
              <Link to={`/post/${listing.id}`}>
                <Button>Go To Post!</Button>
              </Link>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
