import React from 'react'
import HomePageBanner from '../components/HomePageBanner/HomePageBanner'
import ApplicationProcess from '../components/ApplicationProcess/ApplicationProcess'
import BrowseLatestJobs from '../components/BrowseLatestJobs/BrowseLatestJobs'
import JobsCategory from '../components/JobsCategory/JobsCategory'
import FrequentlyAskedQuestion from '../components/FrequentlyAskedQuestion/FrequentlyAskedQuestion'
import AskQuestions from '../components/AskQuestions/AskQuestions'

export default function Home() {
    const fakeArray = Array.from({ length: 6 })
    return (
        <>
            <HomePageBanner />
            <ApplicationProcess />
            <BrowseLatestJobs length={fakeArray} />
            <JobsCategory />
            <FrequentlyAskedQuestion />
            <AskQuestions />
        </>
    )
}
