const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://femacaraeg.github.io/my-portfolio',
  title: 'FM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fe',
  role: 'Front-end Developer & UI/UX Designer',
  description:
    'I can design and build fully responsive web pages using React, Next.js, Javascript, HTML, CSS, and more.',
  resume: 'static/macaraeg_cv.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/fe-rosette-macaraeg-108597162/',
    github: 'https://github.com/femacaraeg',
  },
}

const moreAbout = {
  description1:
    'I love exploring new things and continuously improving my skills. I am independent but also like to work with people. Most recently, I’ve been building web apps with React and exploring Next.js.',
  description2:
    'I have experience closely working with different teams from Australia, the United States, and New Zealand.',
  description3:
    'In my free time you can find me at the gym, coffee shops or at the bar playing Trivia Nights with friends. ',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    id: 1,
    name: 'Coffee Shop Explorer',
    description:
      'A personal project that can be used to search and upvote nearby coffee stores. This app uses Unsplash API for loading coffee store images and Airtable for storing data.',
    stack: ['Next.js', 'Javascript', 'CSS Modules'],
    sourceCode: 'https://github.com/femacaraeg/discover-coffee',
    livePreview: 'https://discover-coffee-livid.vercel.app/',
  },
  {
    id: 2,
    name: 'Online Sabong',
    description:
      'An end-to-end online gaming platform that caters to all of the operational needs of an online operator, agent, and its players. Its aim is to elevate the user experience compared to existing systems, as well as provide improved reliability, security, and analytics capabilities.',
    stack: ['React', 'TypeScript', 'Material UI', 'Nx'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    id: 3,
    name: 'Camp Bernardino de Lavigan',
    description:
      'A landing page that showcases Camp Bernardino de Lavigan, a beach resort in Governor Generoso, Davao Oriental that offers water activities, dining, wellness services, and a glamping experience.',
    stack: ['Figma', 'Squarespace'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://campbernardino.com',
  },
  {
    id: 4,
    name: 'Buylocal',
    description:
      'An e-commerce website and platform to help small businesses go online and showcase their products.',
    stack: ['HTML', 'CSS', 'JQuery'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://buylocal.com',
  },
  {
    id: 5,
    name: 'Harmonate',
    description:
      ' A data operations technology with machine learning capability for funds and fund administrators. Its aim is to properly manage data and gain powerful insights that is highly traceable.',
    stack: [
      'ReactJS',
      'CSS Modules',
      'Storybook',
      'Material UI',
      'Webpack',
      'msw',
    ],
    responsibilities: [
      'Developed features for Harmonate by using React and Material UI',
      'Create reusable components that are shared between different applications',
      'Ensure maintainability by fixing bugs, refactoring, and documenting components with Storybook',
      'Collaborated with other team members such as product owner and designer to ensure usability of features',
      'Implement mocking of server in preparation for the integration of backend to frontend using msw',
    ],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Material UI',
  'Git',
  'CSS Modules',
  'Tailwind',
  'Figma',
  'Adobe XD',
  'Github',
  'JIRA',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'femacaraeg@mail.com',
}

export { header, about, projects, skills, contact, moreAbout }
