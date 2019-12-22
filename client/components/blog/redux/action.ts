import { AnyAction } from "redux";
import { ChangePageArgs ,ChangeListArgs} from '../blog'

export const ActionType_change_page = "CHANGE_PAGE@blog";
export const ActionCreator_change_page: (args: ChangePageArgs) => AnyAction = (args: ChangePageArgs) => {
    return {
        type: ActionType_change_page,
        payload: args
    }
}

export const ActionType_change_list = "CHANGE_LIST@blog"
export const ActionCreator_change_list: (args: ChangeListArgs) => AnyAction = (args: ChangeListArgs) => {
    return {
        type: ActionType_change_list,
        payload: args
    }
}