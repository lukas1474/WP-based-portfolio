export const getAllProjects = ({ projects }) => projects;
export const getCountProjects = ({ projects }) => projects.length;

export const getProjectById = ({projects}, projectId) => {
  const filtered = projects.data && projects.data.filter(project => project.id == projectId);
  return filtered.length ? filtered[0] : {error: true};
};

const initialState = {};

const reducerName = 'projects';

const createActionName = name => `app/${reducerName}/${name}`;

const API_PROJECT = createActionName('API_PROJECT');

export const apiProject1 = payload => ({payload: payload, type: API_PROJECT });

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case API_PROJECT: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    default:
      return statePart;
  }
}
