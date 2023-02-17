import React from 'react';
import {
  Root,
  Icon,
  Item,
  ItemList,
  IconStyled as IconRoot,
} from './styled-component';

import {
  Root as ActionsheetRoot,
  Backdrop,
  Item as ActionsheetItem,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
} from './styled-component-actionsheet';
import { createSelect } from '@universa11y/select';
import { createIcon } from '@universa11y/icon';
import { Wrapper } from '../Wrapper';
import { createActionsheet } from '@universa11y/actionsheet';

const Actionsheet = createActionsheet({
  Root: ActionsheetRoot,
  Backdrop,
  Item: ActionsheetItem,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
});

export const AccessibleSelect = createSelect(
  {
    Root,
    Icon,
    Item,
    ItemList,
  },
  { Actionsheet }
) as any;

export const ChevronDownIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M20.2286 6L11.9973 14.3785L3.76862 6.00268L2 7.80293L12 18L22 7.80293L20.2286 6Z',
}) as any;

export const Select = () => {
  return (
    <Wrapper>
      <AccessibleSelect>
        <AccessibleSelect.ItemList placeholder="Select">
          <AccessibleSelect.Item value="select option" label="select option" />
          <AccessibleSelect.Item
            value="select option 1"
            label="select option 1"
          />
          <AccessibleSelect.Item
            value="select option 2"
            label="select option 2"
          />
          <AccessibleSelect.Item
            value="select option 3"
            label="select option 3"
          />
        </AccessibleSelect.ItemList>
        <AccessibleSelect.Icon>
          <ChevronDownIcon sx={{ w: 20, h: 20 }} />
        </AccessibleSelect.Icon>
      </AccessibleSelect>
    </Wrapper>
  );
};

export default Select;