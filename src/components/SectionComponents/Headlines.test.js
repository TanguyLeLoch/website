import Headlines from './Headlines';

import { render, screen } from '@testing-library/react';

describe('Headlines', () => {
  it('Should render the good number of elememts', async () => {
    const headlines = ['elem1', 'elem2', 'elem3'];
    render(<Headlines headlines={headlines} />);
    const elems = await screen.findAllByText(/elem[1-3]/);
    expect(elems.length).toBe(3);
    const separators = await screen.findAllByText('/');
    expect(separators.length).toBe(2);
  });
});
