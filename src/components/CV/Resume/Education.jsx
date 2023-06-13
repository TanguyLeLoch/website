import Rubrik from '../../SectionComponents/Rubrik';
import Icon from '../../../utils/Icon';
import Moments from '../../SectionComponents/Moments';
const educationTitle = (
  <>
    <Icon icon="fa-user-graduate" />
    <span>Education</span>
  </>
);
const ExperienceTitle = (
  <>
    <Icon icon="fa-briefcase" />
    <span>Experiences</span>
  </>
);
const triPicaDescription = (
  <>
    Backend development for a real-time utilities/telcos BSS platform. Cutting edge stack: Java 17, microservices architecture, AWS server, continuous
    integration. <br /> One quarter of my time is devops activity for debug and fix production issues. <br /> First keypoint is the quality of development for
    having the lowest memory impact to keep a software as efficient as possible. The second keypoint is having a very short time to market.
  </>
);

const universignDescription = (
  <>
    Backend development as a Freelancer for an electronic signature services. The
    technology and methodology used were very modern with an hexagonal architecture, DDD, trunk based development, monorepo, microservices...
    <br /> The transactional aspect and the API backward compatibility (for 0 service interruption during deployment) were a very important focused points.
  </>
);
function Education() {
  return (
    <Rubrik >

      <Rubrik title={ExperienceTitle} >
        <Moments date="September 2022 - March 2023" company="Universign" localisation="Paris" description={universignDescription} />
        <Moments date="March 2021 - September 2022" company="triPica" localisation="Paris" description={triPicaDescription} />
        <Moments
          date="March 2020 -  March 2021"
          company="Sopra Steria / FDJ"
          localisation="Aix en Provence"
          description="Backend development for a master data management system. Stack is EBX5, Java 8 and the usual Java stack (Spring, maven, hibernate)"
        />
      </Rubrik>

      <Rubrik title={educationTitle} >
        <Moments
          date="2017 - 2020"
          company="Master Degree"
          localisation="Seatech - University of Toulon"
          description="Master Degree (French Engineering Diploma) specialized in signal processing, data science and IT sytems."
        />
        <Moments
          date="2014 - 2017"
          company="Bachelor Degree"
          localisation="University of Rennes"
          description="Bachelor Degree about mecanics and engineering science."
        />
        <Moments
          date="2011 - 2014"
          company="A Level Degree"
          localisation="Lycée Yves Thepot"
          description="Scientific degree with engineering science option."
        />
      </Rubrik>
    </Rubrik>
  );
}
export default Education;
