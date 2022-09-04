import "firebase/firestore";
import reducer from './reducers/reducer'
import { useDispatch } from "react-redux";
import { createStore} from 'redux';
import { createFirestoreInstance } from "redux-firestore";

const tick = {
    ticketDetails: 'tickets'
}

const inistialState = {}

const store = createStore(reducer)

export default store;

export const rrfProps = {
    config:tick,
    dispatch: store.dispatch,
    createFirestoreInstance

}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 