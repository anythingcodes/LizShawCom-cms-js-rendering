import React, { useState } from 'react';
import { styled } from 'styled-components';
import StyledComponentsRegistry from '../../StyledComponentsRegistry';
import StyledComponentsIsland from '../../StyledComponentsIsland';
// @ts-expect-error TODO: Fix issue with ?island query param
import InteractiveCounter from '../../InteractiveCounter?island';

const Wrapper = styled.div`
  max-width: 500px;
  margin-bottom: 40px;
  padding: 0.5em 1em;
  border: 3px dashed red;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`;

export const Component = function StyledComponentsPartial({}) {
  return (
    // TODO: Move registry to provider level
    <StyledComponentsRegistry>
      <Wrapper>
        <StyledComponentsIsland module={InteractiveCounter} />
      </Wrapper>
    </StyledComponentsRegistry>
  );
};
export { fields } from './fields';
export const meta = {
  label: `Card Module`,
};
