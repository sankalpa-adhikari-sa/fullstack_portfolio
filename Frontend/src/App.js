import './App.css';
import NavbarSection from './section/NavbarSection';
import { Route, Routes} from 'react-router-dom';
import StartPage from './StartPage';
import Settings from './section/Settings';
import ProfileDetails from './section/settings/ProfileDetails'
import ProfileEducation from './section/settings/ProfileEducation'
import ProfileCertificate from './section/settings/ProfileCertificate'
import ProfileExperience from './section/settings/ProfileExperience'
import ProjectDetails from './section/settings/ProjectDetails'
import ProjectTags from './section/settings/ProjectTags'
import BlogDetails from './section/settings/BlogDetails'
import BlogTags from './section/settings/BlogTags'
import Messages from './section/settings/Messages'
import Login from './section/Login';
import PrivateRoute from './components/PrivateRoute';
import ProjectIndv from './section/ProjectIndv';
import BlogIndv from './section/BlogIndv';


function App() {
  return (
    <div className="App">
      <NavbarSection/>

      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/projects/page/:pageNumber' element={<StartPage/>}/>
        <Route path="/project/:id" element={<ProjectIndv/>} />
        <Route path="/blog/:id" element={<BlogIndv/>} />
        <Route path='/login' element={<Login/>}/>
        <Route   element={<PrivateRoute/>}>
          <Route path='/settings' element={<Settings/>}>
            <Route path='profile/details' element={<ProfileDetails/>}/>
            <Route path='profile/education' element={<ProfileEducation/>}/>
            <Route path='profile/certificate' element={<ProfileCertificate/>}/>
            <Route path='profile/experience' element={<ProfileExperience/>}/>
            <Route path='project/details' element={<ProjectDetails/>}/>
            <Route path='project/tags' element={<ProjectTags/>}/>
            <Route path='blog/details' element={<BlogDetails/>}/>
            <Route path='blog/tags' element={<BlogTags/>}/>
            <Route path='messages' element={<Messages/>}/>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App
