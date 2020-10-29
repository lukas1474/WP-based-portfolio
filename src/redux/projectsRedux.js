export const getAllProjects = ({ projects }) => projects;
export const getCountProjects = ({ projects }) => projects.length;

const initialState = {
  projects: [
    {
      id: 5206,
      title: {
        rendered: 'Dom w monochromatycznym wydaniu.'
      },
      content: {
        rendered: '(...)'
      },
      date: '2019-12-10T20:36:42',
      categories: [45, 40, 69, 37, 36],
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
      categories: [45, 40, 69, 37, 36],
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
      categories: [45, 40, 69, 37, 36],
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
      categories: [45, 40, 69, 37, 36],
    },
  ],
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
