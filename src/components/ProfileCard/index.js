import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { fetchUser } from "../../utils/fetchUser";
import {
  IconLocation,
  IconWebsite,
  IconTwitter,
  IconCompany,
} from "../../constants/images";

const ProfileCard = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetchUser("octocat").then((result) => {
      if (result !== null) setUser(result);

      console.log(result);
    });
  }, []);

  return (
    <section className="bg-white dark:bg-yankeesBlue shadow-searchbar dark:shadow-none rounded-[15px] p-6 lg:p-11">
      <div className="flex items-center gap-4 mb-8 relative lg:gap-9 lg:mb-5 lg:items-start">
        <div className="w-[70px] h-[70px] rounded-full overflow-hidden lg:absolute lg:w-[117px] lg:h-[117px]">
          <img src={user.avatar_url} alt="profile pic" />
        </div>
        <div className="hidden lg:block w-[117px] h-[0px]"></div>
        <div className="flex-shrink-0 flex-grow lg:relative">
          <h2 className="text-fs_h2 font-fw_h2 leading-lh_h2 capitalize lg:text-fs_h2_lg lg:mb-[2px]">
            {user.name}
          </h2>
          <h3 className="text-azure text-fs_h3 font-fw_h3 leading-lh_h3 lg:text-fs_h3_lg lg:mb-5">
            <a
              href={user.html_url}
              target="_blank"
              className="focus:outline-dashed focus:outline-2 focus:outline-queenBlue dark:focus:outline-white focus:outline-offset-1 rounded-sm"
            >
              @{user.login}
            </a>
          </h3>
          <p className="lg:absolute lg:top-0 lg:right-0">
            Joined{" "}
            <date>{`${new Date(user.created_at).getDate()} ${
              new Date(user.created_at).toDateString().split(" ")[1]
            } ${new Date(user.created_at).getFullYear()}`}</date>
          </p>
        </div>
      </div>

      <div className="lg:flex lg:gap-9">
        <div className="hidden lg:block w-[117px] h-[117px] flex-shrink-0"></div>

        <div className="w-full">
          <p className="mb-6 lg:mb-8">
            {user.bio !== null ? (
              user.bio
            ) : (
              <span className="opacity-50">This profile has no bio</span>
            )}
          </p>

          <ul className="mb-6 lg:mb-9 flex justify-between items-center bg-ghostWhite dark:bg-darkGunMetal px-4 py-[18px] rounded-[10px] lg:px-8 lg:py-[15px]">
            <li className="flex flex-col items-center sm:items-start">
              <h4 className="text-fs_h4 font-fw_h4 leading-lh_h4 capitalize lg:text-fs_h4_lg">
                repos
              </h4>
              <span className="font-bold text-[16px] lg:text-[22px]">
                {user.public_repos}
              </span>
            </li>
            <li className="flex flex-col items-center sm:items-start">
              <h4 className="text-fs_h4 font-fw_h4 leading-lh_h4 capitalize lg:text-fs_h4_lg">
                followers
              </h4>
              <span className="font-bold text-[16px] lg:text-[22px]">
                {user.followers}
              </span>
            </li>
            <li className="flex flex-col items-center sm:items-start">
              <h4 className="text-fs_h4 font-fw_h4 leading-lh_h4 capitalize lg:text-fs_h4_lg">
                following
              </h4>
              <span className="font-bold text-[16px] lg:text-[22px]">
                {user.following}
              </span>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 sm:max-h-[63px] sm:flex-wrap lg:gap-x-16">
            <li className="flex items-center gap-2 ">
              <IconLocation />
              <p>
                {user.location !== null ? (
                  user.location
                ) : (
                  <span className="opacity-50">Not available</span>
                )}
              </p>
            </li>
            <li className="flex items-center gap-2 ">
              <IconWebsite />
              <p>
                <a
                  href={user.blog !== null ? user.blog : ""}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline focus:outline-dashed focus:outline-2 focus:outline-queenBlue dark:focus:outline-white focus:outline-offset-1 rounded-sm"
                >
                  {user.blog !== null ? (
                    user.blog
                  ) : (
                    <span className="opacity-50">Not available</span>
                  )}
                </a>
              </p>
            </li>
            <li className="flex items-center gap-2 ">
              <IconTwitter />
              <p>
                {user.twitter_username !== null ? (
                  user.twitter_username
                ) : (
                  <span className="opacity-50">Not available</span>
                )}
              </p>
            </li>
            <li className="flex items-center gap-2 ">
              <IconCompany />
              <p>
                {user.company !== null ? (
                  user.company
                ) : (
                  <span className="opacity-50">Not available</span>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
