import React, { useState } from "react";
import { RiNotification2Line } from "react-icons/ri";
import { BsChatDots } from "react-icons/bs";
import { IoLockClosedOutline, IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import UserAccountProfile from "./user.account/UserAccountProfile";
import UserAccountChat from "./user.account/UserAccountChat";
import UserAccountNotifications from "./user.account/UserAccountNotifications";
import UseraccountSecurity from "./user.account/UseraccountSecurity";
import UserAccountPreferences from "./user.account/UserAccountPreferences";
import api from "../../utils/Axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetail } from "../../features/UserSlice";

const UserAccount = () => {
  const [userAccountMenu, setUserAccountMenu] = useState("profile");
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      (async () => {
        const response = await api.get("/api/details/user/access/detail");
        dispatch(setUserDetail(response?.data?.user));
      })();
    } catch (error) {
      toast.error(error);
    }
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 flex gap-2 md:gap-4">
      <div className="border-[1px] rounded-md p-1 md:p-4 shadow-sm w-[10%] md:w-[20%]">
        <div
          onClick={() => setUserAccountMenu("profile")}
          className={`flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md ${
            userAccountMenu === "profile" ? "bg-blue-100 font-medium" : ""
          }`}
        >
          <FaUser />
          <p className="hidden md:block">My Profile</p>
        </div>

        <div
          onClick={() => setUserAccountMenu("chat")}
          className={`flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md ${
            userAccountMenu === "chat" ? "bg-blue-100 font-medium" : ""
          }`}
        >
          <BsChatDots />
          <p className="hidden md:block">Chat</p>
        </div>

        <div
          onClick={() => setUserAccountMenu("notifications")}
          className={`flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md ${
            userAccountMenu === "notifications" ? "bg-blue-100 font-medium" : ""
          }`}
        >
          <RiNotification2Line />
          <p className="hidden md:block">Notifications</p>
        </div>

        <div
          onClick={() => setUserAccountMenu("security")}
          className={`flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md ${
            userAccountMenu === "security" ? "bg-blue-100 font-medium" : ""
          }`}
        >
          <IoLockClosedOutline />
          <div className="hidden md:block">
            Security<span className="ml-1 hidden xl:inline-block">Options</span>
          </div>
        </div>

        <div
          onClick={() => setUserAccountMenu("preferences")}
          className={`flex justify-center md:justify-start items-center gap-2 poppins-regular text-sm mb-2 hover:bg-blue-100 p-2 rounded-md ${
            userAccountMenu === "preferences" ? "bg-blue-100 font-medium" : ""
          }`}
        >
          <IoSettingsOutline />
          <p className="hidden md:block">Preferences</p>
        </div>
      </div>

      <div className="border-[1px] rounded-md p-4 shadow-sm w-[90%] md:w-[80%]">
        {userAccountMenu === "profile" && <UserAccountProfile />}
        {userAccountMenu === "chat" && <UserAccountChat />}
        {userAccountMenu === "notifications" && <UserAccountNotifications />}
        {userAccountMenu === "security" && <UseraccountSecurity />}
        {userAccountMenu === "preferences" && <UserAccountPreferences />}
      </div>
    </div>
  );
};

export default UserAccount;
