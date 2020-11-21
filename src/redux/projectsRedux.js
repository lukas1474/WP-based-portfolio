export const getAllProjects = ({ projects }) => projects;
export const getCountProjects = ({ projects }) => projects.length;

const initialState = [
  {
    id: 5206,
    title: {
      rendered: 'Dom w monochromatycznym wydaniu.'
    },
    content: {
      rendered: '(...)'
    },
    date: '2019-12-10T20:36:42',
    categories: [69, 37, 36],
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    id: 5207,
    title: {
      rendered: 'Dom w monochromatycznym wydaniu 2.'
    },
    content: {
      rendered: '(...)'
    },
    date: '2019-13-10T20:36:42',
    categories: [45, 69, 37, 36],
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    id: 5208,
    title: {
      rendered: 'Dom w monochromatycznym wydaniu 3.'
    },
    content: {
      rendered: '(...)'
    },
    date: '2019-14-10T20:36:42',
    categories: [69, 37, 40],
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    id: 5209,
    title: {
      rendered: 'Dom w monochromatycznym wydaniu 4.'
    },
    content: {
      rendered: '(...)'
    },
    date: '2019-12-10T20:36:42',
    categories: [69, 36],
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
];

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
