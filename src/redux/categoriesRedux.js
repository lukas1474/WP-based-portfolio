export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

export const getCategory = ({categories}, itemId) => {
  const filtered = categories.filter(item => item.id == itemId);
  return filtered.length ? filtered[0] : {error: true};
};

const initialState = [
  { id: 69, name: 'Wszystkie' },
  { id: 45, name: 'Elewacja' },
  { id: 40, name: 'Salon' },
  { id: 37, name: 'Kuchnia' },
  { id: 36, name: 'Łazienka' },
];

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
