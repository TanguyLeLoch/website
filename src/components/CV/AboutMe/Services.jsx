import Rubrik from '../../SectionComponents/Rubrik';
import Item from '../../SectionComponents/Item';

const textDev = 'Building a custom tailored solution based on your technical need.';
const textUnitTest = 'Writing development associated unit tests to ensure a good behavior and avoid any regression in the future.';
const textDoc = 'Writing the documentation and keep it up to date.';
function Services() {
  return (
    <Rubrik title="My services" format="grid">
      <Item title="Development" icon="fa-code" text={textDev}></Item>
      <Item title="Unit test" icon="fa-vial-circle-check" text={textUnitTest}></Item>
      <Item title="Documentation" icon="fa-book" text={textDoc}></Item>
    </Rubrik>
  );
}

export default Services;
