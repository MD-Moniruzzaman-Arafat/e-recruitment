import React from 'react'
import JobCircularBanner from '../components/PageBanner/PageBanner'
import BrowseLatestJobs from '../components/BrowseLatestJobs/BrowseLatestJobs'
import FrequentlyAskedQuestion from '../components/FrequentlyAskedQuestion/FrequentlyAskedQuestion'
import AskQuestions from '../components/AskQuestions/AskQuestions'
import PageBanner from '../components/PageBanner/PageBanner'

export default function JobCircular() {
    const fakeArray = Array.from({ length: 15 })

    return (
        <>
            <PageBanner title={'Job Circular'} description={'Explore Exciting Career Opportunities with Us – Join a Team That Values Innovation, Growth, and Excellence, and Take the Next Step in Shaping a Brighter Future Together!'} />
            <BrowseLatestJobs length={fakeArray} />
            <FrequentlyAskedQuestion />
            <AskQuestions />
        </>
    )
}
