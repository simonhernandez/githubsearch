import React from "react";
import { useState, useContext } from "react";
import { IconSearch } from "../../constants/images";
import { UserContext } from "../../context/UserContext";


import { fetchUser } from "../../utils/fetchUser";

const Searchbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOnClick = () => {
    fetchUser(searchTerm).then((result) => setUser(result));
  };
  
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter"){
      fetchUser(searchTerm).then((result) => setUser(result));
    }
  }

  return (
    <div className="flex justify-between items-center sm:justify-start sm:gap-6 bg-white p-[7px] dark:bg-yankeesBlue rounded-[15px] shadow-searchbar mb-4">
      <IconSearch />
      <input
        type="text"
        placeholder="Search Github username..."
        className="text-[13px] bg-transparent"
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
      />
      <button
        className="px-[18px] py-[12px] rounded-[10px] bg-azure text-white text-[14px] font-bold sm:ml-auto"
        onClick={handleOnClick}
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;
