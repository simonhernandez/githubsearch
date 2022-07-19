import React from "react";
import { useState, useContext } from "react";
import { IconSearch } from "../../constants/images";
import { UserContext } from "../../context/UserContext";


import { fetchUser } from "../../utils/fetchUser";

const Searchbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [userFound, setuserFound] = useState(true);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOnClick = () => {
    fetchUser(searchTerm).then((result) => {
      if (result !== null) {
        setUser(result);
        setuserFound(true)
      }
      else setuserFound(false)
    });
  };
  
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter"){
      fetchUser(searchTerm).then((result) => {
        if (result !== null) {
          setUser(result);
          setuserFound(true)
        }
        else setuserFound(false)
      });
    }
  }

  return (
    <div className="flex justify-between items-center sm:justify-start sm:gap-6 bg-white p-[7px] dark:bg-yankeesBlue rounded-[15px] shadow-searchbar dark:shadow-none mb-4 lg:mb-6 sm:pl-8">
      <IconSearch />
      <input
        type="text"
        placeholder="Search Github username..."
        className=" w-1/2 text-[13px] bg-transparent focus:outline-dashed focus:outline-2 focus:outline-queenBlue dark:focus:outline-white focus:outline-offset-1 rounded-sm"
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
      />
      {!userFound && (
        <p className="ml-auto text-tartOrange font-bold capitalize">no results</p>
      )}
      <button
        className="px-[18px] py-[12px] rounded-[10px] bg-azure text-white text-[14px] font-bold sm:ml-auto transition duration-300 hover:opacity-60 focus:outline-dashed focus:outline-2 focus:outline-queenBlue dark:focus:outline-white focus:outline-offset-1"
        onClick={handleOnClick}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
