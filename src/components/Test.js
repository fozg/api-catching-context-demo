import React, { Component } from 'react'
import withApiCatch from '../hocs/withApiCatch';

class TextApi extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.props.callApi(() => fakeApiCall().then(res => {
      this.setState({ data: res })
    })
    )
  }

  render() {
    return (
      <div>
        Is api loading:  {this.props.isCallingApi ? "TRUE" : "FALSE"}
        <br />
        Load data: {this.state.data}
      </div>
    )
  }
}

export default withApiCatch(TextApi);

async function fakeApiCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve('This is data! 👏'), 1000);
    // undo comment below to test the catch
    // throw 401;
  });
}