import { combineReducers } from "redux"
import { emplyeeReducer } from "./employeeReducer"

const reducer = combineReducers({
    emplyeeReducer
})

export default reducer;
export type AppState = ReturnType<typeof reducer>