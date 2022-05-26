import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import PostCard from '.';

const props = {
  id: 1,
  title: 'Post Title',
  subtitle: 'Subtitle',
  content: 'Content',
  categories: [{ id: 1, name: 'Development' }],
  published_at: '2020-12-03T19:25:00.234Z',
  thumbnail: {
    id: 1,
    url: '/img/thumbnail.jpg',
  },
  slug: 'post-title',
  large: false,
};

const mockRouter: NextRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  locale: undefined,
  isReady: false,
  locales: undefined,
  defaultLocale: undefined,
  domainLocales: undefined,
  isPreview: false,
  isLocaleDomain: false,
};

describe('<Footer />', () => {
  it('should render correctly', () => {
    renderWithTheme(<PostCard {...props} />);

    expect(screen.getByAltText(/capa do artigo/i)).toBeInTheDocument();
    expect(screen.getByText(/development/i)).toBeInTheDocument();
    expect(screen.getByText(/post title/i)).toBeInTheDocument();
    expect(screen.getByText(/subtitle/i)).toBeInTheDocument();
    expect(screen.getByText(/03 de dez. de 2020/i)).toBeInTheDocument();
  });

  it('should render no categories text', () => {
    renderWithTheme(<PostCard {...props} categories={[]} />);

    expect(screen.getByText(/sem categoria/i)).toBeInTheDocument();
  });

  it('should redirect to /[slug] page when clicking image and title', () => {
    renderWithTheme(
      <RouterContext.Provider value={mockRouter}>
        <PostCard {...props} />
      </RouterContext.Provider>,
    );

    const image = screen.getByAltText(/capa do artigo/i);
    const title = screen.getByText(props.title);

    fireEvent.click(image);
    fireEvent.click(title);

    expect(mockRouter.push).toHaveBeenCalledTimes(2);
    expect(mockRouter.push).toHaveBeenCalledWith('/post-title', '/post-title', {
      locale: undefined,
      scroll: true,
      shallow: undefined,
    });
  });
});
