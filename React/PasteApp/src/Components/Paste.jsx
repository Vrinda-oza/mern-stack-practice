/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { removefromPastes } from "../Redux/PasteSlice";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removefromPastes(pasteId));
    toast.success("Paste Deleted Successfully");
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success("Copied to Clipboard!");
  }

  async function handleShare(paste) {
    if (navigator.share) {
      try {
        await navigator.share({
          title: paste.title,
          text: paste.content,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Sharing is not supported on this browser.");
    }
  }

  return (
    <div className="w-full flex flex-col items-center mt-5">

      {/* Search Bar */}

      <input
        className="border-2 border-gray-400 rounded-xl p-2 w-[650px] pl-4 outline-none"
        type="text"
        placeholder="Search Here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Paste Cards */}

      <div className="w-[700px] flex flex-col gap-5 mt-8">

        {filteredData.length > 0 ? (

          filteredData.map((paste) => (

            <div
              key={paste._id}
              className="border-2 border-gray-400 rounded-xl p-5 shadow-lg flex flex-col gap-4"
            >

              {/* Title */}

              <div className="text-2xl font-bold">
                {paste.title}
              </div>

              {/* Content */}

              <div className="break-words text-gray-700">
                {paste.content}
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap justify-evenly gap-3">

                <Link to={`/?pasteId=${paste._id}`}>
                  <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black">
                    Edit
                  </button>
                </Link>

                <Link to={`/pastes/${paste._id}`}>
                  <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black">
                    View
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(paste._id)}
                  className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleCopy(paste.content)}
                  className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black"
                >
                  Copy
                </button>

                <button
                  onClick={() => handleShare(paste)}
                  className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black"
                >
                  Share
                </button>

              </div>

              {/* Date */}

              <div className="text-sm text-gray-500">
                {new Date(paste.createdAt).toLocaleString()}
              </div>

            </div>

          ))

        ) : (

          <div className="text-xl font-semibold mt-10">
            No Paste Found
          </div>

        )}

      </div>

    </div>
  );
};

export default Paste;