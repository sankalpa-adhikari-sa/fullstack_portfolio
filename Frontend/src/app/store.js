import { configureStore } from '@reduxjs/toolkit'
import educationReducer from '../features/educationSlice'
import experienceReducer from '../features/experienceSlice'
import certificateReducer from '../features/certificateSlice'
import ProjectsReducer from '../features/ProjectsSlice'
export const store = configureStore({
  reducer: {
    education: educationReducer,
    experience: experienceReducer,
    certificate: certificateReducer,
    projects:ProjectsReducer,
  },
})