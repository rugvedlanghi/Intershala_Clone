import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Feature/Userslice";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <div className="flex items-center mt-9 mb-4 justify-center">
        <div className="max-w--xs">
          <div className="bg-white  shadow-xl shadow-black rounded-lg py-5 px-4 ">
            <div className="photo-wrapper p-2">
              <img
                src={user?.photo}
                alt=""
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <div className=" font-semibold p-2">
              <h3 className="text-center text-xl text-gray-900 ">
                {user.name}
              </h3>
            </div>
            <div className=" flex  my-3">
              <h3 className="text-xl font-semibold ">UID : </h3>
              <h3 className="text-center text-xl text-gray-900">{user.uid}</h3>
            </div>
            <div className=" flex  my-3">
              <h3 className="text-xl font-semibold ">Email : </h3>
              <h3 className="text-center text-xl text-gray-900">
                {user.email}
              </h3>
            </div>
            <div className="mt-4 flex justify-center ">
              <Link
                href="/application"
                class="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-black group">
                <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                  Button Text
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
