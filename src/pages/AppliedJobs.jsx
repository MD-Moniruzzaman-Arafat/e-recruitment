import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import AppliedJob from '../components/AppliedJob/AppliedJob'
import FrequentlyAskedQuestion from '../components/FrequentlyAskedQuestion/FrequentlyAskedQuestion'
import AskQuestions from '../components/AskQuestions/AskQuestions'

export default function AppliedJobs() {
    const fakeArray = Array.from({ length: 10 })

    return (
        <>
            <PageBanner title={'Applied Jobs'} description={'Keep Track of Your Job Applications – Stay Informed About the Progress of the Positions You’ve Applied For and Receive Timely Updates on Their Status'} />
            <AppliedJob length={fakeArray} />
            <FrequentlyAskedQuestion />
            <AskQuestions />
        </>
    )
}
