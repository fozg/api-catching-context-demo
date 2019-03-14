## Usage

Avaiable props:
```js
isCallingApi: boolean
watch: func
```

Import
```js
import withApiCatch from '../hocs/withApiCatch';

class Example extends Component {
  ...
}

export default withApiCatch(Example)
```

Watching an api
```js
componentDidMount() {
  this.props.watch(() => fakeApiCall().then(res => {
    this.setState({ data: res })
  }))
}
```
