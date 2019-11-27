import React from "react";
import { IBulletinItemProps } from "./IBulletinItemProps";
import avatarImage from "../../../images/avatars/daniel.jpg";
import productImage from "../../../images/products/image-aqua.png";

export default class BulletinItem extends React.Component<IBulletinItemProps> {
  handleUpvote = () => {
    this.props.upvote(this.props.id);
  };

  removeBulletin = () => {
    this.props.remove(this.props.id);
  };

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={productImage} alt="User" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpvote}>
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={"#"}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={avatarImage} alt="Avatar" />
          </div>
        </div>
        <button onClick={this.removeBulletin}>X</button>
      </div>
    );
  }
}
