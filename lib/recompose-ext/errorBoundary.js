import { createFactory, Component, Error } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';

const errorBoundary = onCatch => BaseComponent => {
  const factory = createFactory(BaseComponent)
  class ErrorBoundary extends Component {
    componentDidCatch(error: Error, info: string) {
      return onCatch(error, info, this.state);
    }

    render() {
      return factory(this.props);
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'errorBoundary'))(
      ErrorBoundary
    )
  }
  return ErrorBoundary;
}

export default errorBoundary;
