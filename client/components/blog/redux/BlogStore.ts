import { BlogStoreState } from '../blog'
import { createStore as createStore_redux, AnyAction, applyMiddleware, compose } from 'redux'
import { ActionType_change_page, ActionType_change_list } from '../redux/action';
//import createSagaMiddleware from 'redux-saga';

interface MyWindow extends Window {
    devToolsExtension: any
}
declare var window: MyWindow;

export const createStore = (InitialStates: BlogStoreState) => {
    //const sagaMiddleware = createSagaMiddleware()
    const store_original = (state: BlogStoreState = InitialStates, action: AnyAction) => {
        console.log(action.type)
        switch (action.type) {
            case ActionType_change_page: {
                console.log(action.payload)
                return Object.assign({}, state, { page: action.payload.page ,changePageInitial:false})
            }
            case ActionType_change_list: {
                return Object.assign({}, state, { articleList: action.payload.articleList })
            }
            default: {
                return state
            }
        }
    }
    //return createStore_redux(store, applyMiddleware(sagaMiddleware))

    if (process.browser) {
        return createStore_redux(store_original, compose(
            process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : (f: any) => f
        ))
    }
    return createStore_redux(store_original)

}
