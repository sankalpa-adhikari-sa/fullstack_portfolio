import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../axios';

const initialState = {
  loading:false,
  Blog_data:[],
  currentPage:1,
  totalPages:null,
  filterOptions:{
    type:'',
  },
  blog:null,
  error: '',
  status:'idle',
}
export const fetchBlog = createAsyncThunk('blogs/fetchBlog', async (blogId) => {
    try {
      const response = await axiosInstance.get(`blogs/blog/${blogId}/`);
      return response.data;
    } catch (error) {

      throw error.response.data;
    }

  }
);

export const fetchBlogsData = createAsyncThunk('projects/fetchBlogsData', async ({type}) => {
  try {
    const response = await axiosInstance.get('blogs/blog/', {params:{
      type
    }});
    return response.data;
  } catch (error) {

    throw error.response.data;
  }
});

export const createBlogsData = createAsyncThunk('projects/createBlogsData', async (blog) => {
  try {
    const response = await axiosInstance.post('blogs/blog/', blog);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const blogsSlice = createSlice({
  name: 'blogs',
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
      .addCase(fetchBlog.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.loading = true;
        state.status = 'succeeded';
        state.blog = action.payload;
        state.error = ''
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.blog = null
        state.error = action.error.message;
      })
      .addCase(fetchBlogsData.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchBlogsData.fulfilled, (state, action) => {
        state.loading = true;
        state.status = 'succeeded';
        state.Blog_data = action.payload;
        state.error = ''
      })
      .addCase(fetchBlogsData.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.Blog_data = []
        state.error = action.error.message;
      })
      .addCase(createBlogsData.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(createBlogsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = true;
        state.Blog_data.push(action.payload);
      })
      .addCase(createBlogsData.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      })

  }
})

export const {setCurrentPage, setFilteroptions}= blogsSlice.actions;
// Action creators are generated for each case reducer function
export default blogsSlice.reducer