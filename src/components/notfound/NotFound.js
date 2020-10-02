import React from "react";
import { Link } from "react-router-dom";
//import IMG from "../../assets/images/404pageNotFound";

class NotFound extends React.Component {
  //   constructor(props) {
  //     props;
  //   }
  render() {
    return (
      <div className="NotFoundBody">
        <div className="NotFound">
          <p>Not Found: {this.props.location.pathname}</p>
          <div className="Link">
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
