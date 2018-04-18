import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    //will fetch weather from ../acions/index.js
    case FETCH_WEATHER:

      // you can't use push to state because you can't change the state without
      // using setState. Concat return completly new array
      // return state.concat([action.payload.data]);
      // with ES6 we can use instead:

      return [action.payload.data, ...state]; //returns [new_city, old, old]
  }
  return state;
}
