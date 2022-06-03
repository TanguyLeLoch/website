import NavBar from './';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen } from '@testing-library/react';
import { DimensionContext } from '../../utils/context';
describe('Navbar', () => {
  it('Should render the navbar without crash', async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <DimensionContext.Provider value={{ dimension: { height: 100, width: 100 } }}>
          <NavBar />
        </DimensionContext.Provider>
      </Router>
    );
    expect(screen.getByTestId('navbar')).toMatchInlineSnapshot(`
<nav
  class="sc-gsnTZi ddGnon"
  data-testid="navbar"
>
  <div
    class="sc-dkzDqf essEor"
  >
    <a
      class="sc-hKMtZM cPuKBW"
      href="/"
    >
      <h1>
        Tanguy Le Loch
      </h1>
    </a>
    <div
      class="sc-papXJ"
    >
      <a
        class="sc-jSMfEi kJYyQx"
        href="/"
      >
        <span
          class="sc-jqUVSM jAjytg"
        >
          Description
        </span>
      </a>
      <a
        class="sc-jSMfEi kJYyQx"
        href="/projects"
      >
        <span
          class="sc-jqUVSM jAjytg"
        >
          Projects
        </span>
      </a>
    </div>
  </div>
  <hr
    class="sc-ftvSup gkeZKV"
  />
</nav>
`);
  });
});
