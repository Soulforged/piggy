//@flow
import { createFactory, Component } from 'react';
import { setDisplayName, wrapDisplayName } from 'recompose';

import type { ElementType } from 'react';

type Spec = {
  didMount?: ((props: any) => void),
  onCatch?: ((error: Error, info: string, props: any) => void),
  willUnmount?: ((props: any) => void)
};

const boundLifecycle = (spec: Spec) => (baseComponent: ElementType) => {
  const factory = createFactory(baseComponent);

  if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
    console.error(
      'lifecycle() does not support the render method; its behavior is to ' +
        'pass all props and state to the base component.'
    );
  }

  class Lifecycle extends Component<{}> {
    componentDidMount(){
      return spec.didMount && spec.didMount(this.props);
    }

    componentDidCatch(error: Error, info: string) {
      return spec.onCatch && spec.onCatch(error, info, this.props);
    }

    componentWillUnmount() {
      return spec.willUnmount && spec.willUnmount(this.props);
    }

    render() {
      return factory({
        ...this.props,
        ...this.state,
      });
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(baseComponent, 'lifecycle'))(
      Lifecycle
    );
  }
  return Lifecycle;
}

export default boundLifecycle;
