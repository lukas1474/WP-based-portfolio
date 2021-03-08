export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;
export const getMainCategory = ({ mainCategory }) => mainCategory;

export const getCategory = ({ categories }, itemId) => {
  const filtered = categories.data.filter((item) => item.id == itemId);
  return filtered.length ? filtered[0] : { error: true };
};

const initialState = {
  mainCategory: [{ id: null, name: `Wszystkie` }],
};

const reducerName = `categories`;

const createActionName = (name) => `app/${reducerName}/${name}`;

const API_CATEGORY = createActionName(`API_CATEGORY`);

export const apiCategory = (payload) => ({
  payload,
  type: API_CATEGORY,
});

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case API_CATEGORY:
      return {
        ...statePart,
        data: action.payload,
      };
    default:
      return statePart;
  }
}
