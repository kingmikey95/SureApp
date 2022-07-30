import InstructionsBar from './InstructionsBar';
import { renderWithProviders } from '../../utils/test';
import { Simulate } from 'react-dom/test-utils';
import { fireEvent, getByText } from '@testing-library/react';
import React from 'react';
import { Button } from '@mui/material';

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
    const getByText = renderWithProviders(
      <InstructionsBar {...defaultProps} />
    );

    getByText.container.onclick;

    expect(getByText).toBeCalled();
  });
});
