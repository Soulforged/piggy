import { createFactory, Component } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';

const boundLifecycle = spec => BaseComponent => {
  const factory = createFactory(BaseComponent);

  if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
    console.error(
      'lifecycle() does not support the render method; its behavior is to ' +
        'pass all props and state to the base component.'
    );
  }

  class Lifecycle extends Component {
    componentDidMount(){
      return spec['didMount'] && spec['didMount'](this.props);
    }

    componentDidCatch(error, info) {
      return spec['onCatch'] && spec['onCatch'](this.props);
    }

    componentWillUnmount() {
      return spec['willUnmount'] && spec['willUnmount'](this.props);
    }

    render() {
      return factory({
        ...this.props,
        ...this.state,
      });
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'lifecycle'))(
      Lifecycle
    );
  }
  return Lifecycle;
}

export default boundLifecycle;
