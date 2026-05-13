import React from 'react'
import logo from "../assets/logo.svg";
import toggleOut from "../assets/toggleOut.svg";
import { sidebarList } from '../utilies/const';
import moreIcon from "../assets/more.svg";
import goldcrown from "../assets/crown.svg";
import profilePic from "../assets/image (1).png";
import link from "../assets/link.svg";


const Sidebar = () => {
    return (
        <aside
            className="bg-white border-r border-slate-300 w-full h-full flex flex-col fixed top-0 left-0 max-w-[264px] py-6 overflow-auto">

            <div className="flex flex-wrap items-center gap-4 relative px-4 py-4">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                    <img src={logo} className="w-[194px]  h-[31px]" alt="company logo" />
                </div>
                <button type="button" aria-label="Collapse sidebar" aria-controls="sidebar-navigation" aria-expanded="true"
                    className="cursor-pointer bg-[#C5C0E5] h-[34px] w-[34px] rounded-full flex justify-center items-center">
                    <img src={toggleOut} className='h-3.5 w-3.5' />
                </button>
            </div>
            <nav aria-label="Primary sidebar navigation" className="flex-1">
                <ul className="space-y-0.5 text-sm text-slate-800 font-medium">
                    {sidebarList.map(item => (
                        <li key={item.key}>
                            <a href="#" aria-current="page"
                                className="flex items-center gap-2.5 sidebar-heading px-6 py-3 transition-all ">
                                <img src={item.icon} className='h-[23px] w-[23px] ' />
                                {item.title}
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>

            <div className="bg-linear-to-r from-[#7464E4]/60 to-[#B5A78B]/60 backdrop-blur-[100px] cursor-pointer mt-6 px-4 focus:outline-none h-[136px]">
                <div className='py-2 px-2 flex items-center gap-4'>
                    <img src={moreIcon} className='h-6 w-6' />
                    <p className='font-lexend font-normal text-[18px] leading-[100%] tracking-[0] capitalize'>More</p>
                </div>
                <div className='bg-[linear-gradient(263.53deg,_#151521_0%,_#151724_25.08%,_#063A50_51.11%,_#07384C_64.27%,_#141420_97.72%)] h-[42px] flex items-center gap-x-4 py-2 px-2 rounded-sm'>
                    <img src={goldcrown} className='w-[42px] h-[24px]' />
                    <div>
                        <h4 className='font-lexend font-normal text-[11px] leading-[14px] tracking-[0] text-[#FFFFFF]'>Corporate Employee Offer</h4>
                        <p className='font-lexend font-semibold text-[12px] leading-[100%] tracking-[0] capitalize bg-linear-to-r from-[#F8E2B9] to-[#9D7827] bg-clip-text text-transparent'>1 Month for ₹1</p>
                    </div>
                </div>
                <div className='flex items-center justify-between px-2 py-2'>
                    <div className='flex items-center gap-2'>
                        <img src={profilePic} className='rounded-full h-[36] w-[36]' />
                        <div className='flex flex-col gap-y-1'>
                            <p className='font-lexend font-normal text-[14px] leading-[100%] tracking-[-0.02em] text-left text-[#070707]'>Zeeshan Ahmad</p>
                            <p className='font-lexend font-normal text-[10px] leading-[100%] tracking-[0] capitalize text-[#4F4F4F]'>Indus Global Pvt Ltd Admin</p>
                        </div>
                    </div>
                    <div>
                        <img src={link} className='w-[9px] h-[9px]' />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar