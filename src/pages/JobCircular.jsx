import React from 'react'
import JobCircularBanner from '../components/JobCircularBanner/JobCircularBanner'
import BrowseLatestJobs from '../components/BrowseLatestJobs/BrowseLatestJobs'

export default function JobCircular() {
    const fakeArray = Array.from({ length: 15 })

    return (
        <>
            <JobCircularBanner />
            <BrowseLatestJobs length={fakeArray} />
        </>
    )
}
