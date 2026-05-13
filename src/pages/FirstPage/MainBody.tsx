import React, { useState, type MouseEvent } from 'react'
import Modal from '../../components/Modal'
import VerificationIntro from './VerificationIntro'

const MainBody = () => {
    const [modal, setModal] = useState(true)
    const handleModalClose = (e: MouseEvent<HTMLButtonElement>) => {
        setModal(false)
    }
    return (
        <>
            <Modal children={<VerificationIntro />} isOpen={modal} onClose={handleModalClose} />
            <div>MainBody</div>
        </>
    )
}

export default MainBody