import './App.css'
import ApplicationProcess from './components/ApplicationProcess/ApplicationProcess'
import BrowseLatestJobs from './components/BrowseLatestJobs/BrowseLatestJobs'
import HomePageBanner from './components/HomePageBanner/HomePageBanner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <HomePageBanner />
      <ApplicationProcess />
      <BrowseLatestJobs />
    </>
  )
}

export default App
