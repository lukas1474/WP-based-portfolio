// import axios from 'axios';
// import { API_URL } from '../config';

export const getAllProjects = ({ projects }) => projects;
export const getCountProjects = ({ projects }) => projects.length;

export const getProjectById = ({projects}, projectId) => {
  const filtered = projects.filter(project => project.id == projectId);
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
// const START_REQUEST = createActionName('START_REQUEST');
// const END_REQUEST = createActionName('END_REQUEST');
// const ERROR_REQUEST = createActionName('ERROR_REQUEST');
// const LOAD_PROJECTS = createActionName('LOAD_PROJECTS');

// export const selectedProject = payload => ({payload: payload, type: SELECT_PROJECT });
// export const startRequest = payload => ({ payload, type: START_REQUEST });
// export const endRequest = payload => ({ payload, type: END_REQUEST });
// export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });
// export const loadProjects = payload => ({ payload, type: LOAD_PROJECTS });

// export const loadProjectsRequest = () => {
//   return async dispatch => {
//     dispatch(startRequest({ name: 'LOAD_PROJECTS'}));
//     try {

//       let res = await axios.get(`${API_URL}/`);
//       dispatch(loadProjects(res.data));
//       dispatch(endRequest({ name: 'LOAD_PROJECTS'}));

//       console.log(loadProjectsRequest);

//     } catch(event) {
//       dispatch(errorRequest({name: 'LOAD_PROJECTS', error: event.message}));
//     }
//   };
// }

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SELECT_PROJECT: {
      return {
        ...statePart,
        activePost: action.payload,
      };
    }
    // case LOAD_PROJECTS:
    //   return { ...statePart, data: [...action.payload] };
    // case START_REQUEST:
    //   return { ...statePart, requests: {...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false }} };
    // case END_REQUEST:
    //   return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true }} };
    // case ERROR_REQUEST:
    //   return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false }} };
    default:
      return statePart;
  }
}
