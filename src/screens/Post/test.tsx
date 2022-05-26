import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Post from '.';

const props = {
  post: {
    id: 1,
    title: 'Post Title',
    subtitle: 'Subtitle',
    content: 'Content',
    categories: [
      { id: 1, name: 'Development' },
      { id: 2, name: 'News' },
    ],
    published_at: '2020-12-03T19:25:00.234Z',
    thumbnail: {
      id: 1,
      url: '/thumbnail.jpg',
    },
    slug: 'post-title',
    large: false,
  },
};

// jest.doMock('components/Seo', () => {
//   return {
//     __esModule: true,
//     default: function mockSeo() {
//       return <div data-testid="seo-mock" />;
//     },
//   };
// });

describe('<Post />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Post {...props} />);

    // expect(screen.getByTestId('seo-mock')).toBeInTheDocument();
    expect(screen.getByText(/development/i)).toBeInTheDocument();
    expect(screen.getByText(/news/i)).toBeInTheDocument();

    expect(screen.getByText(/post title/i)).toBeInTheDocument();
    expect(screen.getByText(/subtitle/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
    expect(screen.getByText(/03 de dez. de 2020/i)).toBeInTheDocument();
  });

  it('should render no categories text', () => {
    renderWithTheme(<Post post={{ ...props.post, categories: undefined }} />);

    expect(screen.getByText(/sem categoria/i)).toBeInTheDocument();
  });
});
