// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tmbdApi } from '@/services/api'
import currentSelectionReducer from '@/features/category-slice'

export const store = configureStore({
  reducer: { [tmbdApi.reducerPath]: tmbdApi.reducer, currentSelection: currentSelectionReducer },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmbdApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
