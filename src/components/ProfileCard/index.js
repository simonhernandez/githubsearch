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
    fetchUser("octocat").then((result) => setUser(result));
  }, []);

  return (
    <section className="bg-white dark:bg-yankeesBlue shadow-searchbar dark:shadow-none rounded-[15px] p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
          <img src={user.avatar_url} alt="profile pic" />
        </div>
        <div>
          <h2 className="text-fs_h2 font-fw_h2 leading-lh_h2 capitalize">
            {user.name}
          </h2>
          <h3 className="text-azure text-fs_h3 font-fw_h3 leading-lh_h3">
            <a href={user.html_url} target="_blank">
              @{user.login}
            </a>
          </h3>
          <p>
            Joined <date>{`${new Date(user.created_at).getDate()} ${new Date(user.created_at).toDateString().split(" ")[1]} ${new Date(user.created_at).getFullYear()}`}</date>
          </p>
        </div>
      </div>

      <p className="mb-6">{user.bio}</p>

      <ul className="mb-6 flex justify-between items-center bg-ghostWhite dark:bg-darkGunMetal px-4 py-[18px] rounded-[10px]">
        <li className="flex flex-col items-center sm:items-start">
          <h4 className="text-fs_h4 font-fw_h4 leading-lh_h4 capitalize">
            repos
          </h4>
          <span className="font-bold text-[16px]">{user.public_repos}</span>
        </li>
        <li className="flex flex-col items-center sm:items-start">
          <h4 className="text-fs_h4 font-fw_h4 leading-lh_h4 capitalize">
            followers
          </h4>
          <span className="font-bold text-[16px]">{user.followers}</span>
        </li>
        <li className="flex flex-col items-center sm:items-start">
          <h4 className="text-fs_h4 font-fw_h4 leading-lh_h4 capitalize">
            following
          </h4>
          <span className="font-bold text-[16px]">{user.following}</span>
        </li>
      </ul>

      <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <li className="flex items-center gap-2 sm:basis-2/5">
          <IconLocation />
          <p>{user.location !== null ? user.location : "Not available"}</p>
        </li>
        <li className="flex items-center gap-2 sm:basis-2/5">
          <IconWebsite />
          <p><a href={user.blog !== null ? user.blog : ""} target="_blank" rel="noreferrer">{user.blog !== null ? user.blog : "Not available"}</a></p>
        </li>
        <li className="flex items-center gap-2 sm:basis-2/5">
          <IconTwitter />
          <p>
            {user.twitter_username !== null
              ? user.twitter_username
              : "Not available"}
          </p>
        </li>
        <li className="flex items-center gap-2 sm:basis-2/5">
          <IconCompany />
          <p>{user.company !== null ? user.company : "Not available"}</p>
        </li>
      </ul>
    </section>
  );
};

export default ProfileCard;
