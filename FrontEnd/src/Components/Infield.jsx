import { forwardRef } from "react";



 const inputs=forwardRef (function Infield({label,textarea,...props},ref)
{
    return(
        <>
        <p className="flex flex-col gp-5 mb-2" >
        <label ref={ref} className="text-stone-700 font-semibold" htmlFor="">{label}</label>
              {
                textarea?<textarea ref={ref} {...props}  className="bg-stone-200 rounded-lg py-4 px-2 focus:outline-none mt-1 "/>:<input ref={ref} className="bg-stone-200 py-3 rounded-md px-2 mt-1 cursor-pointer " {...props} />
              }
        </p>
             

        </>
    )
})
export default inputs;