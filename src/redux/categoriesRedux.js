export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;

const initialState = [
  { id: 'wszystkie', name: 'Wszystkie' },
  { id: 'elewacja', name: 'Elewacja' },
  { id: 'salon', name: 'Salon' },
  { id: 'kuchnia', name: 'Kuchnia' },
  { id: 'łazienka', name: 'Łazienka' },
];

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
