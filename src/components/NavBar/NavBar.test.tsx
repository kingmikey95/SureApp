import NavBar from './NavBar';
import { renderWithProviders } from '../../utils/test';

describe('NavBar', () => {
  const defaultProps = {
    links: [
      { text: 'Link1', href: '/link1' },
      { text: 'Link2', href: '/link2' },
      { text: 'Link3', href: '/link3' },
    ],
  };

  it('should render NavBar links', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText('Link1')).toBeInTheDocument();
    expect(getByText('Link2')).toBeInTheDocument();
    expect(getByText('Link3')).toBeInTheDocument();
  });

  // TODO: Challenge 2
  it('should render an `href` attribute for each link', () => {
    it('should render an `href` attribute for each link', () => {
      const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);
      expect(getByText('Link1').getAttribute('href')).toBe('/link1');
      expect(getByText('Link2').getAttribute('href')).toBe('/link2');
      expect(getByText('Link3').getAttribute('href')).toBe('/link3');
    });
  });
});
