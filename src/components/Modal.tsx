import { memo, type JSX } from "react";
import close from "../assets/close.svg"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: JSX.Element;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white rounded-2xl shadow-xl w-[420px] p-6 animate-[fadeIn_0.2s_ease-out] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[15px] opacity-100">
                <button onClick={onClose} className="absolute h-[41px] w-[41px] bg-[#DAD8E5] rounded-full -top-5 -right-3 flex justify-center items-center" >
                    <img src={close} className="h-4 w-4" />
                </button>
                {children}
            </div>
        </div>
    );
}


export default memo(Modal)