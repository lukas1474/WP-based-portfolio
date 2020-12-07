export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

export const getCategory = ({categories}, itemId) => {
  const filtered = categories.filter(item => item.id == itemId);
  return filtered.length ? filtered[0] : {error: true};
};

const initialState = {
  // data:[],
  // { id: 69, name: 'Wszystkie' },
  // { id: 45, name: 'Elewacja' },
  // { id: 40, name: 'Salon' },
  // { id: 37, name: 'Kuchnia' },
  // { id: 36, name: 'Łazienka' },
};

const reducerName = 'categories';

const createActionName = name => `app/${reducerName}/${name}`;

const API_CATEGORY = createActionName('API_CATEGORY');

export const apiCategory1 = payload => ({payload: payload, type: API_CATEGORY });

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case API_CATEGORY:
      console.log(action.payload)
      return {
        ...statePart,
        // data: action.paylod,
        data: action.payload,
        // {console.log()}
      }
    default:
      return statePart;
  }
}
