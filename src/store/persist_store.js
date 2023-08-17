import { persistStore } from 'redux-persist';

import store from './store'

// creating a persisting store
const persist_store=persistStore(store);

export default persist_store;