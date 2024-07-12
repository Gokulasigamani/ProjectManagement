import noproject from "../assets/noproject.png"
function NoProjects({onProjectAddHandler})
{
    return(
        <>
  
        <div className="w-2/3 mt-24 text-center " >
            <img src={noproject} className="w-56 m-auto " alt="" /> 
            <p className="text-xl font-semibold mt-7 text-stone-700" >No Project Selected</p>
            <button onClick={onProjectAddHandler} className=" px-6 py-2 bg-stone-500 hover:bg-stone-700 transition-all text-stone-300 text-lg rounded-lg mt-5 " >Create New Projects</button>
        </div>  
         
        </>
    )
}
export default NoProjects;