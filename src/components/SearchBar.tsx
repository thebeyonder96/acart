import { useEffect, useState } from "react";
import { InputEvent } from "../configs/types";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { searchAtom, showSearchAtom } from "../store/cart.atom";

const SearchBar = () => {
    const [search, setSearch] = useAtom(searchAtom)
    const [showSearch, setShowSearch] = useAtom(showSearchAtom)
    const [visible,setVisible] = useState(false)

    const location = useLocation()

    useEffect(()=>{
      if(location.pathname.includes('collection')){
        setVisible(true)
      }else{
        setVisible(false)
      }
    },[location])
  return (
    showSearch && setSearch && setShowSearch && visible && (
      <div className="border-t border-b bg-gray-50 text-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input value={search} onChange={(e:InputEvent)=> setSearch(e.target.value)} className="flex-1 bg-inherit outline-none text-sm" type="text" placeholder="Search" name="" id="" />
          <img src={assets.search_icon} className="w-4" alt="" />
        </div>
        <img onClick={()=> setShowSearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} alt="" />
      </div>
    )
  );
};

export default SearchBar;
