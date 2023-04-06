import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../axios';
const initialState = {
  loading:false,
  certificate_data:[],
  error: '',
  status:'idle',
}
export const fetchCertificateData = createAsyncThunk('certificate/fetchCertificateData', async () => {
  try {
    const response = await axiosInstance.get('info/certificate/');
    return response.data;
  } catch (error) {

    throw error.response.data;
  }
});

export const createCertificateData = createAsyncThunk('certificate/createCertificateData', async (cert) => {
  try {
    const response = await axiosInstance.post('info/certificate/', cert);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const certificateSlice = createSlice({
  name: 'certificate',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificateData.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchCertificateData.fulfilled, (state, action) => {
        state.loading = true;
        state.status = 'succeeded';
        state.certificate_data = action.payload;
        state.error = ''
      })
      .addCase(fetchCertificateData.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.certificate_data = []
        state.error = action.error.message;
      })
      .addCase(createCertificateData.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(createCertificateData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = true;
        state.certificate_data.push(action.payload);
      })
      .addCase(createCertificateData.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      })

  }
})

// Action creators are generated for each case reducer function
export default certificateSlice.reducer