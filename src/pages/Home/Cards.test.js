import Cards, { getAge, computeNbColumn, reorderElems } from './Cards';
import { render, screen } from '@testing-library/react';
import ResizeObserver from './__mock__/ResizeObserver';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

jest.mock('../../utils/Icon', () => () => {
  const Icon = 'default-awesome-component-mock';
  return <Icon />;
});

describe('Cards layout', () => {
  it('Should render the good layout of cards', async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Cards />
      </Router>
    );
    const cards = screen.getAllByTestId(/card[0-9]+/);
    expect(cards.length).toBe(4);
  });
});

describe('Reorder elems', () => {
  it('Should reorder the cards', () => {
    const cardRefs = { current: [{ clientHeight: 10 }, { clientHeight: 21 }, { clientHeight: 22 }, { clientHeight: 23 }] };
    const columnsContent = [
      { id: 0, contentList: [{ order: 0 }, { order: 1 }, { order: 2 }, { order: 3 }] },
      { id: 1, contentList: [] },
    ];
    const setColumnsContentMock = jest.fn(() => true);
    const maxNbColumn = 2;
    const minColumnWidth = 400;
    const observer = { current: new ResizeObserver() };
    const windowDimension = { dimension: { width: 900 } };
    reorderElems(cardRefs, columnsContent, setColumnsContentMock, maxNbColumn, minColumnWidth, observer, windowDimension);
    expect(setColumnsContentMock.mock.calls.length).toBe(1);
    const expectedOrder = [
      { id: 0, contentList: [{ order: 0 }, { order: 2 }], totalHeight: 32 },
      { id: 1, contentList: [{ order: 1 }, { order: 3 }], totalHeight: 44 },
    ];
    expect(setColumnsContentMock.mock.calls[0][0]).toStrictEqual(expectedOrder);
  });
});

describe('Test getAge function', () => {
  it('should return the age with a date before the birthday', () => {
    const date = new Date(1653153933000);
    const result = getAge('1997-05-27T00:00:00', date);
    expect(result).toBe(24);
  });
  it('should return the age with a date after the birthday', () => {
    const date = new Date(1653672333000);
    const result = getAge('1997-05-27T00:00:00', date);
    expect(result).toBe(25);
  });
});
describe('Test the number of column', () => {
  it('should give the good number of column 2 column', () => {
    expect(computeNbColumn(2, 400, 800)).toBe(2);
  });
  it('should not return 0 column even with a very small screen', () => {
    expect(computeNbColumn(2, 400, 123)).toBe(1);
  });
  it('should return max column indicate in args', () => {
    expect(computeNbColumn(3, 400, 15000)).toBe(3);
  });
});
