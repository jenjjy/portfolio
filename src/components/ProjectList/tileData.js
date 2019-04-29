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
      'Collaborated in a team with designers to develop a beautiful app to make Main Street Brewing Co rewards system digital and easily accessible for customers.',
    tech: 'React-Native, GraphCool, Apollo Client, Apollo Server',
    featured: true
  },
  {
    id: 2,
    img: [R10],
    title: 'R10',
    description:
      'Developed a cross-platform (iOS/Android) mobile application using React Native for a hypothetical developer conference called "R10".',
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
      'calmversation is a model for learning that bridges the gap for understanding. It was built by a team of 4 members and created with a responsive design in mind while making it easy to navigate through.',
    tech: 'JavaScript, jQuery, PHP, WordPress',
    link: 'https://calmversation.org/'
  }
];

export default tileData;
