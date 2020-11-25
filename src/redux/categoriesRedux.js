export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;
export const getChoseCategory = ({ categories }) => categories.filter( choseCategory => (choseCategory == initialState.id ));

export const getCategory = ({categories}, itemId) => {
  const filtered = categories.filter(item => item.id == itemId);
  console.log(itemId)
  return filtered.length ? filtered[0] : {error: true};
};

const initialState = [
  { id: 69, name: 'Wszystkie' },
  { id: 45, name: 'Elewacja' },
  { id: 40, name: 'Salon' },
  { id: 37, name: 'Kuchnia' },
  { id: 36, name: 'Łazienka' },
];

const reducerName = 'category';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHOSE_CATEGORY = createActionName('CHOSE_CATEGORY');

export const choseCategory = payload => ({ payload, type: CHOSE_CATEGORY });

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHOSE_CATEGORY:
      return action.payload;
    default:
      return statePart;
  }
}
