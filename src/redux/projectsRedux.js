export const getAllProjects = ({ projects }) => projects;
export const getCountProjects = ({ projects }) => projects.length;

export const getProjectById = ({projects}, projectId) => {
  const filtered = projects.filter(project => project.id == projectId.projectId);
  return filtered.length ? filtered[0] : {error: true};
};

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

const reducerName = 'projects';
const createActionName = name => `app/${reducerName}/${name}`;

const SELECT_PROJECT = createActionName('SELECT_PROJECT');

export const selectedProject = payload => ({payload: payload, type: SELECT_PROJECT });

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SELECT_PROJECT: {
      return {
        ...statePart,
        activePost: action.payload,
      };
    }
    default:
      return statePart;
  }
}
