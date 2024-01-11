import React from 'react';
import { useState, useId } from 'react';
import { styled } from 'styled-components';

interface Props {
  $count: number;
}

const Button = styled.button<Props>`
  border: 1px solid #ff7a59;
  background-color: #ff7a59;
  border-radius: 3px;
  color: #ffffff;
  padding: ${({ $count }) => 2 + $count * 4}px;
  user-select: none;
  transition: all 0.15s ease-out;
  &:hover {
    cursor: pointer;
    background-color: #ff8f73;
    border-color: #ff8f73;
    color: #ffffff;
  }
`;

const pluralize = (n, noun, suffix) =>
  `${n !== 1 ? 'are' : 'is'} ${n} ${noun + (n !== 1 ? suffix : '')}`;

export default function InteractiveCounter() {
  const id = useId();
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        {`There ${
          count > 0 ? pluralize(count, 'reason', 's') : 'are so many reasons'
        } to use HubSpot CMS + React!`}
      </p>
      <Button $count={count} onClick={() => setCount(count + 1)}>
        Click me!
      </Button>
      <p>{id}</p>
    </>
  );
}
