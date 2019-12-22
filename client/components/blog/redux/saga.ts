import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { ActionType_change_page } from '../redux/action';

function* fetchUser(action:AnyAction) {
    try {
       yield put({type: "USER_FETCH_SUCCEEDED", user: "test"});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}


function* mySaga() {
    yield takeEvery(ActionType_change_page,fetchUser)
}


export default mySaga;