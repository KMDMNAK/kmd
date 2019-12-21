import { AnyAction } from "redux";
import { ChangePageArgs } from '../blog'

export const ActionType_change_page = "CHANGE_PAGE@blog";
export const ActionCreator_change_page: (args: ChangePageArgs) => AnyAction = (args: ChangePageArgs) => {
    return {
        type: ActionType_change_page,
        payload: args
    }
}