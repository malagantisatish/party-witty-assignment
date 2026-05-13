import React from 'react'
import verifiedBadge from "../../assets/verifiedBadge.svg"

const VerificationIntro = () => {
    return (
        <div className='flex flex-col justify-center'>
            <div className='relative flex justify-center rounded-4xl border-[2px] border-dashed border-[#4F4F4F4D] w-[280px] h-[210px]'>
                <div className='absolute rounded-full h-[39px] w-[39px] -right-0 -top-0 flex justify-center items-center bg-[#53425A1A]'>
                    <img src={verifiedBadge} className='h-[12px] w-[12px]' />
                </div>
                <div className='h-full w-[151px] border-[4px] border-[#4F4F4F] self-center'>

                </div>

            </div>

        </div>
    )
}

export default VerificationIntro