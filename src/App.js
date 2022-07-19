import React from "react";
import { useState } from "react";
import { Header, Searchbar, ProfileCard } from "./components";

import { UserContext } from "./context/UserContext";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const [user, setUser] = useState({});
  // useDarkMode();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <main className="font-primary bg-ghostWhite dark:bg-darkGunMetal dark:text-white px-6 text-fs_body lg:text-fs_body_lg min-h-screen flex items-center justify-center transition duration-500">
        <div className="w-full sm:max-w-[573px] lg:max-w-[730px]">
          <Header />
          <Searchbar />
          <ProfileCard />
        </div>
      </main>
    </UserContext.Provider>
  );
};

export default App;
