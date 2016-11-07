import { FETCH_PROJECTS, FETCH_PROJECT_BYID, FETCH_PROJECT_BYUSERID } from '../actions/index';

const INITIAL_STATE = { all: [], project: ''};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PROJECTS:
            // console.log(action.payload.data);
            return { ...state, all: action.payload.data };
        case FETCH_PROJECT_BYID:
            // console.log(action.payload);
            return { ...state, project: action.payload };
        case FETCH_PROJECT_BYUSERID:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}
