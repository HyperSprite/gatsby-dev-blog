import React from 'react';
import PropTypes from 'prop-types';

class Ratio extends React.Component {
  constructor() {
    super(...arguments);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      hasComputed: false,
      width: 0,
      height: 0,
    };
  }
  componentDidMount() {
    this.setState({
      ...this.getDimensions(this.props),
      hasComputed: true,
    });
    window.addEventListener('resize', this.handleResize, false);
  }
  componentWillReceiveProps(next) {
    this.setState(this.getDimensions(next));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }
  getDimensions() {
    // const { width, height } = this.container.getBoundingClientRect();
    // console.log(width, height, window.innerHeight);
    console.log(window.innerWidth, window.innerHeight);
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  handleResize() {
    this.setState(
      {
        hasComputed: false,
      },
      () => {
        this.setState({
          hasComputed: true,
          ...this.getDimensions(this.props),
        });
      }
    );
  }
  render() {
    return this.props.render(this.state);
  }
}

export default Ratio;
