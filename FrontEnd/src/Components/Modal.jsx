import { forwardRef, useImperativeHandle, useRef } from 'react';
import{createPortal} from 'react-dom'

  const Modal = forwardRef( function Modal({children,buttoncaption},ref)
{
    const dialog=useRef();
    
    useImperativeHandle(ref,()=>
    {
        return{
            open()
            {
                dialog.current.showModal();
            }
        }
        
    })

    return createPortal (

    
            <dialog ref={dialog} className='backdrop:bg-stone-900/90 rounded-md px-8 py-2 '   >
                {children}
                <form action=""method='dialog'>
                    <button className='px-4 py-1 mt-6 ml-44 border-none  bg-red-500 text-white font-semibold rounded-md ' >{buttoncaption}</button>
                </form>
            </dialog>,document.getElementById('modal-root')

    )
}
 )
export default Modal;