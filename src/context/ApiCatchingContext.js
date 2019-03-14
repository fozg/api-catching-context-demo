import React, { Component } from 'react';

export const ApiCatchingContext = React.createContext();

export default class ApiCatchingContextWrap extends Component {
  // TODO: implement multiple apis request
  state = {
    isCallingApi: false
  }

  callApi = async (fnCallApi) => {
    this.setState({isCallingApi: true})
    try {
      await fnCallApi();
    } catch (e) {
      if (e === 401) {
        alert('401, redirecting...')
      }
      console.log("Catching error service", e);
    }
    this.setState({isCallingApi: false});
  }

  render() {
    const { children } = this.props;

    return (
      <ApiCatchingContext.Provider
        value={{
          callApi: this.callApi,
          isCallingApi: this.state.isCallingApi
        }}
      >
        {children}
      </ApiCatchingContext.Provider>
    )
  }
}
