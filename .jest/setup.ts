import '@testing-library/jest-dom';
import 'jest-styled-components';

const noop = () => {};

Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });