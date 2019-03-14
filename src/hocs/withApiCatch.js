import React from 'react'
import { ApiCatchingContext } from '../context/ApiCatchingContext';

export default function (WrapByApiCall) {
  return () => (
    <ApiCatchingContext.Consumer>
      {({ ...props }) => (
        <WrapByApiCall {...props} />
      )}
    </ApiCatchingContext.Consumer>
  )
}
