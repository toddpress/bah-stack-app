import * as types from '../actions/types'

const initialState = [];

function tutorialsReducer(tutorials = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case types.TUTORIAL_CREATE:
            return [
                ...tutorials,
                 payload
            ];

        case types.TUTORIALS_FETCH:
            return payload;
        case types.TUTORIAL_UPDATE:
            const index = tutorials.findIndex(tutorial => tutorial.id === payload.id)
            return [
                ...tutorials.slice(0, index),
                {
                    ...payload
                },
                ...tutorials.slice(index + 1)
            ];
        case types.TUTORIAL_DELETE:
            return tutorials.filter(({ id }) => id !== payload.id )
        case types.ALL_TUTORIALS_DELETE:
            return []
        default:
            return tutorials;
    }
}

export default tutorialsReducer;