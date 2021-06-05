import '@testing-library/jest-dom';
import 'jest-styled-components';
import './match-media-mock';

const noop = () => {};

Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });