import { FETCH_PROJECTS } from '../actions/index';

const INITIAL_STATE = { all: [], project: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PROJECTS:
        console.log(action.payload.data);
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}
