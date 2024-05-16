import store, { rootReducer } from "../store/store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;