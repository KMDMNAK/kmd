import { BlogStoreState } from '../blog'

import { createStore as createStore_redux } from 'redux'

export const createStore = (InitialStates: BlogStoreState) => {
    const store = (state: any = InitialStates, action: any) => {
        switch (action.type) {
            default: {
                return state
            }
        }
    }
    return createStore_redux(store)
}
