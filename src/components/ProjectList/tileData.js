import BoomHome from '../../images/projects/BoomHome.png';
import BoomItems from '../../images/projects/BoomItems.png';
import BoomShare from '../../images/projects/BoomShare.png';
import calm from '../../images/projects/calm.png';
import msb from '../../images/projects/mainstbrewing.gif';
import fbOnboard from '../../images/projects/FBOnboardGiphy.gif';
import R10schedule from '../../images/projects/R10schedule.png';
import R10session from '../../images/projects/R10session.png';

export const tileData = [
  {
    img: [msb],
    title: 'Main Street Brewing Co.',
    description: '',
    tech: 'React Native, GraphCool',
    featured: true
  },
  {
    img: [R10schedule, R10session],
    title: 'R10',
    description: '',
    tech: 'React-Native, JavaScript'
  },
  {
    img: [fbOnboard],
    title: 'Food Buddy',
    description: '',
    tech: 'Meteor, MongoDB, React, Material UI, Goole Maps API'
  },
  {
    img: [BoomHome, BoomItems, BoomShare],
    title: 'BoomCity',
    description: '',
    tech: 'React, Redux, GraphQL, Apollo-Client,Material UI'
  },
  {
    img: [calm],
    title: 'calmversation',
    description: '',
    tech: 'JavaScript, jQuery, PHP, WordPress',
    link: 'https://calmversation.org/'
  },
  {
    img: [BoomItems],
    title: 'Inhabitent',
    description: '',
    tech: 'JavaScript, jQuery, PHP, SASS, WordPress'
  },
  {
    img: [BoomShare],
    title: 'Tennis Pong',
    description: '',
    tech: 'Object-Oriented Programming'
  }
];

export default tileData;
