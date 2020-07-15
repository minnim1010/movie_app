/** @format */

import React from "react";
import PropTypes from "prop-types";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const location = this.props.location;
    if (location.state) {
      return <h1>{location.state.title}</h1>;
    } else {
      return null;
    }
  }
}

Detail.propTypes = {
  year: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Detail;
