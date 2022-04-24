import Rubrik from './Rubrik';
import Icon from '../../../utils/Icon';
import Moments from './Moments';
import React from 'react';
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
const triPicaDescription = (
  <>
    Backend development for a real-time utilities/telcos BSS platform. Cutting
    edge stack: Java 17, microservices architecture, AWS server, continuous
    integration. <br /> One quarter of my time is devops activity for debug and
    fix production issues. <br /> First keypoint is the quality of development
    for having the lowest memory impact to keep a software as efficient as
    possible. The second keypoint is having a very short time to market.
  </>
);
function Education() {
  return (
    <Rubrik format="grid">
      <Rubrik title={educationTitle} format="grid">
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
      <Rubrik title={ExperienceTitle} format="grid">
        <Moments
          date="2021 - nowadays"
          company="triPica"
          localisation="Paris"
          description={triPicaDescription}
        />
        <Moments
          date="2020 - 2021"
          company="Sopra Steria / FDJ"
          localisation="Aix en Provence"
          description="Backend development for a master data management system. Stack is EBX5, Java 8 and the usual Java stack (Spring, maven, hibernate)"
        />
      </Rubrik>
    </Rubrik>
  );
}
export default Education;
