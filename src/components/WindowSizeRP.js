import React from 'react';

class WindowSizeRP extends React.Component {
  constructor(props) {
    super(props);
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

export default WindowSizeRP;
