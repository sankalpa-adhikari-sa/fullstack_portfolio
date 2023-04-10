import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../axios';

const initialState = {
  loading:false,
  Project_data:[],
  currentPage:1,
  totalPages:null,
  filterOptions:{
    type:'',
  },
  project:null,
  error: '',
  status:'idle',
}
export const fetchProject = createAsyncThunk('projects/fetchProject', async (projectId) => {
    try {
      const response = await axiosInstance.get(`projects/projects/${projectId}/`);
      return response.data;
    } catch (error) {

      throw error.response.data;
    }

  }
);

export const fetchProjectsData = createAsyncThunk('projects/fetchProjectsData', async ({type}) => {
  try {
    const response = await axiosInstance.get('projects/projects/', {params:{
      type
    }});
    return response.data;
  } catch (error) {

    throw error.response.data;
  }
});

export const createProjectsData = createAsyncThunk('projects/createProjectsData', async (proj) => {
  try {
    const response = await axiosInstance.post('projects/projects/', proj);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers:{
    setCurrentPage:(state,action) =>{
      state.currentPage = action.payload;
    },
    setFilteroptions:(state,action) =>{
      state.filterOptions.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.loading = true;
        state.status = 'succeeded';
        state.project = action.payload;
        state.error = ''
      })
      .addCase(fetchProject.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.project = null
        state.error = action.error.message;
      })
      .addCase(fetchProjectsData.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchProjectsData.fulfilled, (state, action) => {
        state.loading = true;
        state.status = 'succeeded';
        state.Project_data = action.payload;
        state.error = ''
      })
      .addCase(fetchProjectsData.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.Project_data = []
        state.error = action.error.message;
      })
      .addCase(createProjectsData.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(createProjectsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = true;
        state.Project_data.push(action.payload);
      })
      .addCase(createProjectsData.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      })

  }
})

export const {setCurrentPage, setFilteroptions}= projectsSlice.actions;
// Action creators are generated for each case reducer function
export default projectsSlice.reducer