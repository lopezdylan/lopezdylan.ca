const header = {
  homepage: '',
  title: '',
}

const about = {
  name: 'Dylan Lopez',
  role: 'Full Stack Developer',
  description:
    'Being a developer calls to all my passions; it incorporates creativity, problem solving, provides an endless supply of tools to learn and build with and gives me the power to potentially create something meaningful. If there’s one thing that I’m sure of, it’s that this is what I was meant to do.',
  closingDescription: "Currently looking to tailor my growth and to constantly prove my enthusiastic commitment toward a company that I truly believe in.",
  resume: 'https://share.cloudrumble.ca/s/ntPXZ5YWRF4o3LP',
  social: {
    linkedin: 'https://www.linkedin.com/in/lopezdylan/',
    github: 'https://github.com/lopezdylan',
  },
}

const projects = [
  {
    name: 'Portfolio v1',
    description:
      "A medium for me to practice and discover new technologies, and for me to showcase what I'm capable of and currently working on.",
    stack: ['JavaScript', 'ReactJS', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/lopezdylan/lopezdylan.ca',
    livePreview: 'https://github.com',
  },
  {
    name: 'Springfree HR Management System',
    description:
      'A HRMS created in collaboration and tailored for the Human Resources Department at Springfree Trampoline',
    stack: ['Laravel', 'MySQL', 'Vue'], 
    // sourceCode: 'https://github.com/lopezdylan/lopezdylan.ca',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Project Hera',
    description:
      'Collaborating with the executive team of a transportation and logistics company to create a web application.',
    stack: ['PostGreSQL', 'ExpressJS', 'ReactJS', 'NodeJS'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'QRide',
    description:
      'Auto-generate QR codes to place on bicycles to crowd source the fight against bike thefts. Users can scan the QR code and the web app will notfify the user if it has been stolen or not.',
    stack: ['Django', 'ReactJS', 'MySQL'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Cloud Rumble',
    description:
      "Self-hosted cloud storage hosted on an Unraid server and within a Docker container. Opened through public a port through Let's Encrypt",
    stack: ['Unraid', "Let's Encrypt", 'Linux', 'Docker'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://share.cloudrumble.ca/',
  },
]

const skills = [
  'JavaScript',
  'Python'
]

const contact = {
  email: 'lopezdylanca@gmail.com',
}

export { header, about, projects, skills, contact }
