import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import JobTitle from '../components/JobTitle/JobTitle'
import Summary from '../components/Summary/Summary'
import Requirements from '../components/Requirements/Requirements'
import Responsibility from '../components/Responsibility/Responsibility'
import FrequentlyAskedQuestion from '../components/FrequentlyAskedQuestion/FrequentlyAskedQuestion'
import AskQuestions from '../components/AskQuestions/AskQuestions'

export default function ComprehensiveJobDetails() {
    return (
        <>
            <PageBanner title={'Comprehensive Job Details'} description={'Learn More About Responsibilities, Qualifications, Benefits, and How You Can Contribute to Our Success'} />
            <div className='max-w-[1720px] mx-auto md:px-20'>
                <JobTitle />
                <Summary />
                <Requirements />
                <Responsibility />
                <FrequentlyAskedQuestion />
                <AskQuestions />
            </div>
        </>
    )
}
