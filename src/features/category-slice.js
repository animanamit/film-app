import { createSlice } from '@reduxjs/toolkit'

// export interface RootState {
//   name: string;
//   page: number;
//   searchQuery: string;
// }

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: {
    name: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload)
      state.name = action.payload
    },
  },
})

export const { selectGenreOrCategory } = categorySlice.actions

export default categorySlice.reducer
