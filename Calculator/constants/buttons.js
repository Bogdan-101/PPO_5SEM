// @flow
import type {button} from '../types/button';

export const buttons: button[] = [
  {
    value: 'C',
    type: 'operation',
    onClick: () => {
      return '';
    },
    big: true,
  },
  {
    value: 'DEL',
    type: 'operation',
    onClick: text => {
      return text.slice(0, -1);
    },
    big: true,
  },
  {
    value: '/',
    type: 'operation',
    onClick: text => {
      return `${text} / `;
    },
    big: false,
  },
  {
    value: 7,
    type: 'digit',
    onClick: text => {
      return `${text}7`;
    },
    big: false,
  },
  {
    value: 8,
    type: 'digit',
    onClick: text => {
      return `${text}8`;
    },
    big: false,
  },
  {
    value: 9,
    type: 'digit',
    onClick: text => {
      return `${text}9`;
    },
    big: false,
  },
  {
    value: '*',
    type: 'operation',
    onClick: text => {
      return `${text} * `;
    },
    big: false,
  },
  {
    value: 4,
    type: 'digit',
    onClick: text => {
      return `${text}4`;
    },
    big: false,
  },
  {
    value: 5,
    type: 'digit',
    onClick: text => {
      return `${text}5`;
    },
    big: false,
  },
  {
    value: 6,
    type: 'digit',
    onClick: text => {
      return `${text}6`;
    },
    big: false,
  },
  {
    value: '-',
    type: 'operation',
    onClick: text => {
      return `${text} - `;
    },
    big: false,
  },
  {
    value: 1,
    type: 'digit',
    onClick: text => {
      return `${text}1`;
    },
    big: false,
  },
  {
    value: 2,
    type: 'digit',
    onClick: text => {
      return `${text}2`;
    },
    big: false,
  },
  {
    value: 3,
    type: 'digit',
    onClick: text => {
      return `${text}3`;
    },
    big: false,
  },
  {
    value: '+',
    type: 'operation',
    onClick: text => {
      return `${text} + `;
    },
    big: false,
  },
  {
    value: 0,
    type: 'digit',
    onClick: text => {
      return `${text}0`;
    },
    big: false,
  },
  {
    value: '000',
    type: 'digit',
    onClick: text => {
      return `${text}000`;
    },
    big: false,
  },
  {
    value: '.',
    type: 'operation',
    onClick: text => {
      return `${text}.`;
    },
    big: false,
  },
];
