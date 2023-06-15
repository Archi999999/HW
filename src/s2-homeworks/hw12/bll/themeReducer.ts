const initState:StateType = {
    themeId: 1,
}

export type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
