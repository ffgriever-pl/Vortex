import { Button } from '../../../views/TooltipControls';

import { IAttributeState } from '../types/IAttributeState';
import { ISavegameAttribute } from '../types/ISavegameAttribute';

import * as React from 'react';

function getAttr<T>(state: IAttributeState, key: string, def: T): T {
  if (state === undefined) {
    return def;
  }

  return state[key] !== undefined ? state[key] : def;
}

export interface IAttributeProps {
  attribute: ISavegameAttribute;
  state: IAttributeState;
  onSetAttributeVisible: (id: string, visible: boolean) => void;
  t: Function;
}

class AttributeToggle extends React.Component<IAttributeProps, {}> {
  public render(): JSX.Element {
    const { attribute, t } = this.props;

    return (
      <Button
        id={attribute.id}
        className='btn-embed'
        tooltip={ t(attribute.name) }
        onClick={ this.toggleAttribute }
      />
    );
  }

  private toggleAttribute = () => {
    let { attribute, state, onSetAttributeVisible } = this.props;
    onSetAttributeVisible(attribute.id, !getAttr(state, 'enabled', true));
  };
}

export default AttributeToggle;
