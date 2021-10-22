import React,{useState,useEffect,useRef} from 'react'
import PropTypes from 'prop-types'
import './modal.scss';
const Modal = props => {
    const [active,setActive]=useState(false);
    useEffect(()=>{
        setActive(props.active);
    },[])
    return (
        <div 
        id={props.id}
        className={`modal ${active ? 'active' : ''}`} 
        >
            {props.children}
        </div>
    )
}

Modal.propTypes = {
    active:PropTypes.bool,
    id:PropTypes.string,
}
export const modalContent = props =>{
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const contentRef=useRef(null);
   const closeModal=()=>{
    contentRef.current.parentNode.classList.remove("active");
    if(props.onClose) props.onClose();
}
    return (
        <div className="modal__content">
            {props.children}
            <div className="modal__content__close" onclick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}
modalContent.propTypes = {
    onClose: PropTypes.func,
}
export default Modal
