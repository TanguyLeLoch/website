import Rubrik from './Rubrik';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faVialCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const devLogo = <FontAwesomeIcon icon={faCode} />;
const unitTestLogo = <FontAwesomeIcon icon={faVialCircleCheck} />;
const documentationLogo = <FontAwesomeIcon icon={faBook} />;
const textDev = 'Building a custom tailored solution based on your technical need.';
const textUnitTest = 'Writing development associated unit tests to ensure a good behavior and avoid any regression in the future.';
const textDoc = 'Writing the documentation and keep it up to date.';
function Services() {
  return (
    <Rubrik title='My services'>
      <Item title='Development' logo={devLogo} text={textDev}></Item>
      <Item title='Unit test' logo={unitTestLogo} text={textUnitTest}></Item>
      <Item title='Documentation' logo={documentationLogo} text={textDoc}></Item>
    </Rubrik>
  );
}

export default Services;
