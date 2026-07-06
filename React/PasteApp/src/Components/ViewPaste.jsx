/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="text-center text-2xl mt-10">
        Paste Not Found
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Copied to Clipboard!");
  };

  return (
    <div className="flex flex-col items-center mt-8 gap-6">

      {/* Title */}

      <input
        type="text"
        value={paste.title}
        readOnly
        className="w-[700px] border-2 border-gray-400 rounded-xl p-3 outline-none"
      />

      {/* Content */}

      <textarea
        value={paste.content}
        readOnly
        rows={18}
        className="w-[700px] border-2 border-gray-400 rounded-xl p-4 resize-none outline-none"
      />

      {/* Buttons */}

      <div className="flex gap-4">

        <button
          onClick={handleCopy}
          className="border border-gray-500 px-5 py-2 rounded-lg hover:bg-gray-200 hover:text-black"
        >
          Copy
        </button>

      </div>

      {/* Date */}

      <div className="text-gray-500">
        Created At : {new Date(paste.createdAt).toLocaleString()}
      </div>

    </div>
  );
};

export default ViewPaste;