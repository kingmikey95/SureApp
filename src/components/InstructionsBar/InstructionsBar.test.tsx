import InstructionsBar from './InstructionsBar';
import { renderWithProviders } from '../../utils/test';
import { fireEvent, render } from '@testing-library/react';
describe('InstructionsBar', () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  it('should render a "View challenges" button', () => {
    const { getByText } = renderWithProviders(
      <InstructionsBar {...defaultProps} />
    );
    expect(getByText('View challenges')).toBeInTheDocument();
  });

  // TODO: Challenge 3

  it('should call the onClick prop when the button is clicked', () => {
    const buttonClick = renderWithProviders(
      <InstructionsBar {...defaultProps}>View challenges</InstructionsBar>
    );
    fireEvent.click(buttonClick.getByText('View challenges'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
