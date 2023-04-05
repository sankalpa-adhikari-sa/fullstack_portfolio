import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../axios';
const initialState = {
  loading:false,
  education_data:[],
  error: '',
  status:'idle',
}
export const fetchEducationData = createAsyncThunk('education/fetchEducationData', async () => {
  try {
    const response = await axiosInstance.get('info/education/');
    return response.data;
  } catch (error) {

    throw error.response.data;;
  }
});

export const createEducationData = createAsyncThunk('education/createEducationData', async (edu) => {
  try {
    const response = await axiosInstance.post('info/education/', edu);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const educationSlice = createSlice({
  name: 'education',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducationData.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchEducationData.fulfilled, (state, action) => {
        state.loading = true;
        state.status = 'succeeded';
        state.education_data = action.payload;
        state.error = ''
      })
      .addCase(fetchEducationData.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.education_data = []
        state.error = action.error.message;
      })
      .addCase(createEducationData.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(createEducationData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = true;
        state.education_data.push(action.payload);
      })
      .addCase(createEducationData.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      })

  }
})

// Action creators are generated for each case reducer function
export default educationSlice.reducer