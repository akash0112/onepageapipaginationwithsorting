import {GET_MOVIES} from '../constants/ActionTypes'
const initialState={movies:[]}
const moviereducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_MOVIES:
          return {
            ...state.movies,
            movies: [...state.movies, action.payload],
          };
          default:
          return state
        }
}
export default moviereducer