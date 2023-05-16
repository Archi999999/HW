import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case 'up': {
                    const copyState = state.map(el => ({...el}))
                    return copyState.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
                case 'down': {
                    const copyState = state.map(el => ({...el}))
                    return copyState.sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
                default:
                    return state
            }
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}
