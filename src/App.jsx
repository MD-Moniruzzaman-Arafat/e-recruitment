import './App.css'
import ApplicationProcess from './components/ApplicationProcess/ApplicationProcess'
import AskQuestions from './components/AskQuestions/AskQuestions'
import BrowseLatestJobs from './components/BrowseLatestJobs/BrowseLatestJobs'
import Footer from './components/Footer/Footer'
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
      <AskQuestions />
      <Footer />
    </>
  )
}

export default App
