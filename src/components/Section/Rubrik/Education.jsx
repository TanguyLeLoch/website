import Rubrik from './Rubrik';
import Icon from '../../../utils/Icon';
const educationTitle = (
  <>
    <Icon icon="fa-user-graduate" />
    Education
  </>
);
const ExperienceTitle = (
  <>
    <Icon icon="fa-briefcase" />
    Experiences
  </>
);
function Education() {
  return (
    <Rubrik format="grid">
      <Rubrik title={educationTitle} format="grid"></Rubrik>
      <Rubrik title={ExperienceTitle} format="grid"></Rubrik>
    </Rubrik>
  );
}
export default Education;
