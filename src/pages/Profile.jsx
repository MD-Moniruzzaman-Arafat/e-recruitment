import React from 'react'
import PageBanner from '../components/PageBanner/PageBanner'
import ProfileInformation from '../components/ProfileInformation/ProfileInformation'

export default function Profile() {
    return (
        <>
            <PageBanner title={'Profile'} description={'Showcase Your Skills and Experience – Create a Complete Profile to Unlock Exciting Career Opportunities'} />
            <ProfileInformation />
        </>
    )
}
