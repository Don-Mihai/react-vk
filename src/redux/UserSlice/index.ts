import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../components/Header'

export interface UserState {
  value: number;
  currentUser: IUser;
}

const initialState: UserState = {
  value: 0,
  currentUser: {} as IUser,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload
    },
  },
  extraReducers(builder){
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.currentUser = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer


export const getUser = createAsyncThunk('user/get', async (): Promise<any | undefined> => {
  
  const user: IUser = (await axios.get(`http://localhost:3001/users/${localStorage.getItem('userId')}`))?.data;

  return user

})