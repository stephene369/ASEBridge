import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import SignupForm from './_auth/forms/SignupForm'
import { Toaster } from "./components/ui/toaster"
import { CreatePost } from './_root/pages'
import EditPost from './_root/pages/EditPost'
import PostDetails from './_root/pages/PostDetails'
import Explore from './_root/pages/Explore'
import Profile from './_root/pages/Profile'
import AllUsers from './_root/pages/AllUsers'
import Saved from './_root/pages/Saved'
import UpdateProfile from './_root/pages/UpdateProfile'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/asebridge/sign-in' element={<SigninForm />} />
          <Route path='/asebridge/sign-up' element={<SignupForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route path='/asebridge/' element={<Home />} />
          <Route path='/asebridge/explore' element={<Explore />} />
          <Route path='/asebridge/saved' element={<Saved />} />
          <Route path='/asebridge/all-users' element={<AllUsers />} />
          <Route path='/asebridge/create-post' element={<CreatePost />} />
          <Route path='/asebridge/update-post/:id' element={<EditPost />} />
          <Route path='/asebridge/post/:id' element={<PostDetails />} />
          <Route path='/asebridge/profile/:id/*' element={<Profile />} />
          <Route path='/asebridge/update-profile/:id' element={<UpdateProfile />} />

          {/* Catch-all Route for Undefined Paths */}
          <Route path='/asebridge/*' element={<Navigate to="/asebridge/" replace />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
