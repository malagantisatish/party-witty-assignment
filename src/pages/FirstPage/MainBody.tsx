import React from 'react'
import Modal from '../../components/Modal'
import VerificationIntro from './VerificationIntro'

const MainBody = () => {
    return (
        <>
            <Modal children={<VerificationIntro />} isOpen={true} onClose={() => { }} />
            <div>MainBody</div>
        </>
    )
}

export default MainBody