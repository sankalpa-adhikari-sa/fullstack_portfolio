import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../axios';
const initialState = {
  loading:false,
  experience_data:[],
  error: '',
  status:'idle',
}
export const fetchExperienceData = createAsyncThunk('experience/fetchExperienceData', async () => {
  try {
    const response = await axiosInstance.get('info/experience/');
    return response.data;
  } catch (error) {

    throw error.response.data;;
  }
});

export const createExperienceData = createAsyncThunk('experience/createExperienceData', async (exp) => {
  try {
    const response = await axiosInstance.post('info/experience/', exp);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperienceData.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchExperienceData.fulfilled, (state, action) => {
        state.loading = true;
        state.status = 'succeeded';
        state.experience_data = action.payload;
        state.error = ''
      })
      .addCase(fetchExperienceData.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.experience_data = []
        state.error = action.error.message;
      })
      .addCase(createExperienceData.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(createExperienceData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = true;
        state.experience_data.push(action.payload);
      })
      .addCase(createExperienceData.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      })

  }
})

// Action creators are generated for each case reducer function
export default experienceSlice.reducer