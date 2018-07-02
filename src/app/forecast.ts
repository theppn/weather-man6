import {
  REQUEST_FORECAST,
  ADD_FORECAST
} from './actions';

export const forecast = (state = [], action) => {
  switch(action.type) {
    case REQUEST_FORECAST:
      return Object.assign({}, state, {
        city: action.payload.city,
        countryCode: action.payload.countryCode,
      })
      break;
    case ADD_FORECAST:
      return Object.assign({}, state, {
        city: action.payload.city,
        countryCode: action.payload.countryCode,
        lastUpdated: action.payload.lastUpdated,
        data: action.payload.data
      });
      break;
    default:
      return state;
  }
}
