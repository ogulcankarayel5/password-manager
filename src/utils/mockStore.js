
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)

export const makeMockStore = (state={}) => {

    return mockStore({
        ...state,
    })
}