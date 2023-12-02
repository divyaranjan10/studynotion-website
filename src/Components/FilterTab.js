function FilterTab(props){  
    return(
        <div className={`text-base px-5 py-1 rounded-[20px] border border-richblack-700 cursor-pointer ${props.filterDatavar==props.data.title?"bg-black text-white":"bg-white text-black"}`}
        onClick={()=>{
            {props.setfilterDatavar(props.data.title)}
        }}>
            {props.data.title}
        </div>
    );
}

export default FilterTab;
