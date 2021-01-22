import Axios from 'axios';
import { API_URL } from '../config';



const reducerName = 'categories';

const createActionName = name => `app/${reducerName}/${name}`;

const API_CATEGORY = createActionName('API_CATEGORY');

const FETCH_START = createActionName(`FETCH_START`);
const FETCH_SUCCESS = createActionName(`FETCH_SUCCESS`);
const FETCH_ERROR = createActionName(`FETCH_ERROR`);

export const apiCategory = payload => ({payload: payload, type: API_CATEGORY });

export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });


// export const fetchPages = () => (dispatch) => {
//   dispatch(fetchStarted());

//   Axios.get(`https://duraj-wnetrza.pl/wp-json/wp/v2/categories`)
//     .then((res) => {
//       dispatch(fetchSuccess(res.data));
//       console.log(res.data);
//     })
//     .catch((err) => {
//       dispatch(fetchError(err.message || true));
//     });
// };

// export const loadConcertsRequest = () => {
//   return async dispatch => {

//     dispatch(startRequest());
//     try {

//       let res = await axios.get(`https://duraj-wnetrza.pl/wp-json/wp/v2/categories`);
//       dispatch(loadConcerts(res.data));

//       dispatch(endRequest());
//       {console.log(res.data)}
//     } catch(e) {
//       dispatch(errorRequest(e.message));
//     }
//   };
// };

export const getAll = ({ categories }) => categories;

// { console.log({categories}); }

export const getCount = ({ categories }) => categories.length;
export const getMainCategory = ({ mainCategory }) => mainCategory;

export const getCategory = ({ categories }, itemId) => {
  const filtered = categories.data.filter(item => item.id == itemId);
  return filtered.length ? filtered[0] : { error: true };

};

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchStarted());

  Axios.get('https://duraj-wnetrza.pl/wp-json/wp/v2/categories')
  .then(results => {
    return results.json();
  }).then(results => {
    // const { apiProject } = this.props;
    apiCategory(results);
    console.log('results', results)
  })

    .catch((err) => {
      dispatch(fetchError(err.message || true));
    });
};

console.log(fetchSuccess);



// export const fetchFromAPI = () => {
//   return (dispatch, getState) => {
//     dispatch(fetchStarted());

//     Axios
//       .get(`https://duraj-wnetrza.pl/wp-json/wp/v2/categories`)
//       .then(results => {
//         return results.json();
//       })
//       .catch(err => {
//         dispatch(fetchError(err.message || true));
//       });

//       console.log(results)
//   };
// };


const initialState = {
  mainCategory: [
    { id: 1000, name: 'Wszystkie' },
  ],
};
{ console.log(initialState); }

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
