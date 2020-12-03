import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Layout from '.';

jest.mock('components/Header', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="header-mock" />;
  },
}));

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="footer-mock" />;
  },
}));

describe('<Footer />', () => {
  it('should render header, children and footer', () => {
    renderWithTheme(<Layout>Children</Layout>);

    expect(screen.getByTestId('header-mock')).toBeInTheDocument();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
  });
});
