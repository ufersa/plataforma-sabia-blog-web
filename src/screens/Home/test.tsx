import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import HomeScreen from '.';

const props = {
  posts: [
    {
      id: 1,
      title: 'Title',
      content: 'Content',
      published_at: '2020-12-03T19:25:00.234Z',
      slug: 'title',
    },
  ],
  postsCount: 1,
  currentPage: 1,
};

jest.mock('components/PostCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="post-card-mock" />;
  },
}));

jest.mock('components/Pagination', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="pagination-mock" />;
  },
}));

describe('<Home />', () => {
  it('should render post card and pagination', () => {
    renderWithTheme(<HomeScreen {...props} />);

    expect(screen.getByTestId('post-card-mock')).toBeInTheDocument();
    expect(screen.getByTestId('pagination-mock')).toBeInTheDocument();
  });
});
