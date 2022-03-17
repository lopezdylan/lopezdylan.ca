const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dylan Lopez',
  role: 'Full Stack Developer',
  description:
    'With an ',
  resume: '#',
  social: {
    linkedin: 'https://www.linkedin.com/in/lopezdylan/',
    github: 'https://github.com/lopezdylan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio v1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['JavaScript', 'ReactJS', 'HTML', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Springfree HR Management System',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Laravel', 'MySQL', 'Vue'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project Hera',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['PostGreSQL', 'ExpressJS', 'ReactJS', 'NodeJS'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'QRide',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Django', 'ReactJS', 'MySQL'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'lopezdylanca@gmail.com',
}

export { header, about, projects, skills, contact }
