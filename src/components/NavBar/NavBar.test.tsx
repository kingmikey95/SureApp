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
  //Unit test checking for thge good case.
  it('should render an `href` attribute for each link', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText('Link1').getAttribute('href')).toBe('/link1');
    expect(getByText('Link2').getAttribute('href')).toBe('/link2');
    expect(getByText('Link3').getAttribute('href')).toBe('/link3');
  });

  //Unit test is checking for the bad case.
  it('should render an `href` attribute for each link but not equal to the link', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText('Link1').getAttribute('href')).not.toBe('/link3');
    expect(getByText('Link2').getAttribute('href')).not.toBe('/link1');
    expect(getByText('Link3').getAttribute('href')).not.toBe('/link2');
  });
});
