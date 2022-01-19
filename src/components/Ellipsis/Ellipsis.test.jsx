import { render, screen } from '@testing-library/react';
import Ellipsis from './index'
test('renders learn react link', () => {
  render(<Ellipsis />);
  const ellipsisElement = screen.getByTestId("ellipsis");
  expect(ellipsisElement).toBeInTheDocument();
});