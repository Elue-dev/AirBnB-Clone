import { useSelector, useDispatch } from 'react-redux'
import openModal from '../../actions/openModal'
import './Modal.css'

export default function Modal() {

    const modal = useSelector(state => state.siteModal)
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(openModal('closed', ''))
    }

    let modalInlineStyle
    if(modal.openClose === "open"){
        modalInlineStyle = {display: 'block'};
    }else{
        modalInlineStyle = {display: 'none'};
    }


    return (
        <div className='site-modal' style={modalInlineStyle}>
            <div className='modal-content'>
                <div className='col right'>
                    <span onClick={closeModal} className='close'>&times;</span>
                </div>
                <div className=''>
                    {modal.content}
                </div>
            </div>
        </div>
    )
}
