import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filtersActions";

export const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            if (state.includes(action.filter)) {
                return state;
            }
            console.log([...state, action.filter]);
            return [...state, action.filter];
        }
        case REMOVE_FILTER: {
            return state.filter((item) => item !== action.filter);
        }
        case CLEAR_FILTER: {
            return [];
        }
        default:
            return state;
    }
};
