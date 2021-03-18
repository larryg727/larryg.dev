import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Larry Gonzales', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Larry Gonzales',
  subtitle: "I'm a Full Stack Developer",
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot1.jpg',
  paragraphMain: "I'm Larry, a passionate full stack developer located in San Antonio, Texas. ",
  paragraphOne: 'When I am not spending time with my family, I am coding or learning new technologies. I feel fortunate to have a career in a field that I truly enjoy and am passionate about.',
  paragraphTwo: 'While I specialize in JavaScript and Python technologies, I have a wide range of skills to take product ideas from inception to users with a production ready application. With professional startup experience, I enjoy creating solutions as they go through their refinement into a polished web product.',
  paragraphThree: 'If you have any questions or would like to chat more with me, feel free to reach out.',
  email: 'larrygonzales727@gmail.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ezhorseScreenshot.png',
    title: 'EZ Horse Entry',
    info:
      'This application was developed for the horse racing industry to take the traditional pdf condition books for races and parse them and save them in the database to present them  to users in a more modern filterable and searchable form. Additional features include the ability to register for, pay entry fees, and upload required documents for races, online stable creation and tracking, financials tracking, a direct user to user payment system, and more.',
    info2:
      'Javascript | React | GraphQL | Apollo Client | Python | Flask | Graphene | SqlAlchemy | Stripe API',
    url: 'https://ezhorseentry.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lunchisrightScreenshot.png',
    title: 'The Lunch is Right',
    info:
      'This application aids in choosing a random place to eat lunch based on the location entered and a few other optional preferences. Once a random winner is picked, you are presented with the location, phone number, and yelp reviews of the picked restaurant',
    info2:
      'Javascript | React | Redux | GraphQL | Apollo Client | Apollo Server | Node | Express | Yelp GraphQL API',
    url: 'https://thelunchisright.com',
    repo: 'https://github.com/larryg727/TheLunchIsRight', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Sounds great!',
  btn: '',
  email: 'larrygonzales727@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/larryg_dev',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/larryg-dev/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/larryg727',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
