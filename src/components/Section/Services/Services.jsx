import Rubrik from '../Rubrik/Rubrik';
import Item from '../Rubrik/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const devLogo = <FontAwesomeIcon icon={faCode} />;
function Services() {
  return (
    <Rubrik title='My services'>
      <Item title='Development' logo={devLogo}></Item>
      {/* <Item title='Unit test' logo={unitTestLogo}></Item>
      <Item title='Documentation' logo={documentationLogo}></Item> */}
    </Rubrik>
  );
}

export default Services;
