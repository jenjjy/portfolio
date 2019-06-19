import BoomHome from '../../images/projects/BoomHome.png';
import BoomItems from '../../images/projects/BoomItems.png';
import BoomShare from '../../images/projects/BoomShare.png';
import msb from '../../images/projects/msb.gif';
import fbOnboard from '../../images/projects/FBOnboardGiphy.gif';
import R10 from '../../images/projects/R10.png';
import calmversation from '../../images/projects/calmversation.png';
import hackathon from '../../images/projects/hack4humanity.png';

export const tileData = [
  {
    id: 6,
    img: [hackathon],
    title: 'Hackathon - Life of Litter',
    description:
      'A 2-day Hackathon hosted by Girls in Tech, "Hacking for Humanity", where we worked in a team of 4 to build a web app that follows the life of various recyclable products and see where it ends up. What happens to the items when they end up in landfill? How much of it gets recycled?',
    tech: 'React, Material-UI, CSS',
    github: 'https://github.com/jenjjy/hacking-for-humanity'
  },
  {
    id: 5,
    img: [msb],
    title: 'Main Street Brewing Co.',
    description:
      'Worked in a team of 4 developers to build a mobile app from scratch. I helped the client convert their current, stamp card system into a digital format in order to create an enhanced and efficient customer experience.',
    tech: 'React-Native, GraphQL, Apollo',
    github: 'https://github.com/jenjjy/Main-Street-Brewing'
  },
  {
    id: 4,
    img: [R10],
    title: 'R10',
    description:
      'R10 is a cross-platform (iOS/Android) mobile application. It is a scheduling app for the upcoming R10 developer conference.',
    tech: 'React-Native, GraphQL, AsyncStorage',
    github: 'https://github.com/jenjjy/R10-App'
  },
  {
    id: 3,
    img: [fbOnboard],
    title: 'Food Buddy',
    description:
      'Having troubles figuring out where to eat with your friends? This is the app for you! Built and desgined in a team of 5, this app will help reduce frustration and stress while maintaining friendships.',
    tech: 'Meteor, MongoDB, React, Material UI, Google Maps API',
    github: 'https://github.com/jenjjy/Food-Buddy'
  },
  {
    id: 2,
    img: [BoomHome, BoomItems, BoomShare],
    title: 'BoomCity',
    description:
      'A web application where users can share and borrow items from one another.',
    tech: 'React, Redux, PostgrSQL, GraphQL, Apollo, Node, Material UI',
    github: 'https://github.com/jenjjy/Boomcity'
  },
  {
    id: 1,
    img: [calmversation],
    title: 'calmversation',
    description:
      'calmversation is a model for learning that bridges the gap for understanding. It was built by a team of 4 members and created with a responsive design in mind while customizing the backend that caters to the client’s needs.',
    tech: 'JavaScript, jQuery, PHP, WordPress',
    github: 'https://github.com/jenjjy/calmversation',
    link: 'https://calmversation.org/'
  }
];

export default tileData;
