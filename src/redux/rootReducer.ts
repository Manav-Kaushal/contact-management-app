import { combineReducers } from "redux";
import contactsReducer from "./contact/contactReducer";

const rootReducer = combineReducers({
  contactsList: contactsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
