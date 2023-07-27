//store.js
import rootReducer from '../reducers/index'; // 假設有一個名為reducers的資料夾並包含根reducer
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default store;