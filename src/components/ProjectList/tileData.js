import BoomHome from '../../images/projects/BoomHome.png';
import BoomItems from '../../images/projects/BoomItems.png';
import BoomShare from '../../images/projects/BoomShare.png';
import msb from '../../images/projects/mainstbrewing.gif';
import fbOnboard from '../../images/projects/FBOnboardGiphy.gif';
import R10 from '../../images/projects/R10.png';
import calmversation from '../../images/projects/calmversation.png';

export const tileData = [
  {
    id: 1,
    img: [msb],
    title: 'Main Street Brewing Co.',
    description:
      'Worked in a team of 4 developers to build a mobile app from scratch. I helped the client convert their current, stamp card system into a digital format in order to create an enhanced and efficient customer experience.',
    tech: 'React-Native, GraphCool, Apollo Client, Apollo Server',
    featured: true
  },
  {
    id: 2,
    img: [R10],
    title: 'R10',
    description:
      'R10 is a cross-platform (iOS/Android) mobile application. It is a scheduling app for the upcoming R10 developer conference.',
    tech: 'React-Native, GraphQL, AsyncStorage'
  },
  {
    id: 3,
    img: [fbOnboard],
    title: 'Food Buddy',
    description:
      'Having troubles figuring out where to eat with your friends? This is the app for you! Built and desgined in a team of 5, this app will help reduce frustration and stress while maintaining friendships.',
    tech: 'Meteor, MongoDB, React, Material UI, Google Maps API'
  },
  {
    id: 4,
    img: [BoomHome, BoomItems, BoomShare],
    title: 'BoomCity',
    description:
      'A web application where users can share and borrow items from one another.',
    tech: 'React, Redux, PostgrSQL, GraphQL, Apollo, Node, Material UI'
  },
  {
    id: 5,
    img: [calmversation],
    title: 'calmversation',
    description:
      'calmversation is a model for learning that bridges the gap for understanding. It was built by a team of 4 members and created with a responsive design in mind while customizing the backend that caters to the client’s needs.',
    tech: 'JavaScript, jQuery, PHP, WordPress',
    link: 'https://calmversation.org/'
  }
];

export default tileData;
