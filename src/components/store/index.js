import { configureStore } from '@reduxjs/toolkit'
import Slice from './Slice';

const store = configureStore({
  reducer: {
    chat: Slice,
  },
})

export default store;
