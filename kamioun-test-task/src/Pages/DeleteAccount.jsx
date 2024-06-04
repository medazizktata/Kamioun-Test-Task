import React, { useState } from "react";
import { IoIosWarning } from "react-icons/io";
import ButtonComp from "../Components/ButtonComp";

export default function DeleteAccount() {
  const [selectedReason, setSelectedReason] = useState("");
  const [showTextarea, setShowTextarea] = useState(false);
  const [comment, setComment] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const options = [
    { value: "privacy", label: "I have privacy concerns" },
    { value: "not-useful", label: "I no longer find this useful" },
    { value: "irrelevant-emails", label: "I'm receiving irrelevant email contents" },
    { value: "too-many-emails", label: "I'm getting too many emails" },
    { value: "other", label: "Other" }
  ];

  const handleReasonChange = (event) => {
    const value = event.target.value;
    setSelectedReason(value);
    setShowTextarea(value === "other");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (selectedReason === "") {
      alert("Please select a reason.");
      return;
    }

    console.log("Selected Reason:", selectedReason);
    
    if (selectedReason === "other") {
      console.log("Comment:", comment);
    }
    setShowSuccessPopup(true);
    setSelectedReason("");
    setShowTextarea(false);
    setComment("");
    const radioButtons = document.getElementsByName("reason");
    radioButtons.forEach(button => button.checked = false);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  const handleCommentChange = (event) => {
    const value = event.target.value;
    if (value.length <= 2000) {
      setComment(value);
    }
  };

  return (
      <div className="scale-90 bg-white w-[35%] rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-blue-500">
            Delete your Account
          </h1>
          <div className="flex flex-col flex-start gap-3 my-2">
            <span>
              We're sorry to see you go. It would be great if we could know the
              reason behind.
            </span>
            {selectedReason === "" && (
            <div className="flex items-center gap-2 text-red-600 font-bold transition-all duration-500">
              <IoIosWarning />
              <span>Please select one of the below reasons.</span>
            </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mt-2 flex flex-col gap-3">
                {options.map(option => (
                  <div className="flex gap-1" key={option.value}>
                    <input
                      type="radio"
                      name="reason"
                      value={option.value}
                      className="w-5 hover:cursor-pointer"
                      onChange={handleReasonChange}
                    />
                    <span className="text-lg">{option.label}</span>
                  </div>
                ))}
              </div>

              <div className={`relative my-5 transition-all duration-500 ${showTextarea ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <span className="my-4">Let us know if you have other comments.</span>
                <textarea
                  className="my-2 w-full h-40 border border-gray-500 p-3 rounded-lg resize-none"
                  placeholder="Your comments (optional)"
                  rows={6}
                  value={comment}
                  onChange={handleCommentChange}
                ></textarea>
                <span className="text-gray-500 text-xs absolute right-0 -bottom-3">{comment.length}/2000</span>
              </div>

              <ButtonComp type="submit">Submit</ButtonComp>
            </form>
          </div>
        </div>
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg flex flex-col gap-3">
            <h2 className="text-2xl font-bold mb-4">Account Deletion Successful</h2>
            <p>Your account has been successfully deleted.</p>
            <ButtonComp onClick={handleClosePopup}>Close</ButtonComp>
          </div>
        </div>
      )}
    </div>
  );
}
