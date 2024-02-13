"use client"

import { setModal } from "@/redux/slices/utils.slice";
import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";

interface ModalProps{
    title: string;
}

function Modal({title, children}: PropsWithChildren<ModalProps>){
    const dispatch = useDispatch();

    const handleClickBackdrop = ()=>{
        const action = setModal(null);
        dispatch(action);
    };
    
    return(
        <div onClick={handleClickBackdrop}>
            <div onClick={(e)=>e.stopPropagation()}>
                <h2>{children}</h2>
            </div>
        </div>
    )
}

export default Modal;