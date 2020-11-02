export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

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
