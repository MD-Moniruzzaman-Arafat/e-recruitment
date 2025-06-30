import './App.css'
import ApplicationProcess from './components/ApplicationProcess/ApplicationProcess'
import BrowseLatestJobs from './components/BrowseLatestJobs/BrowseLatestJobs'
import FrequentlyAskedQuestion from './components/FrequentlyAskedQuestion/FrequentlyAskedQuestion'
import HomePageBanner from './components/HomePageBanner/HomePageBanner'
import JobsCategory from './components/JobsCategory/JobsCategory'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <HomePageBanner />
      <ApplicationProcess />
      <BrowseLatestJobs />
      <JobsCategory />
      <FrequentlyAskedQuestion />
    </>
  )
}

export default App
