import React from "react";
import CreateAccount from "./Pages/CreateAccount";
import DeleteAccount from "./Pages/DeleteAccount";
import kamiounLogo from "./Assets/kamioun-logo.b3a50ae8.png";
import PersonalInfo from "./Components/PersonalInfo";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-green-300 min-h-screen relative">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <img
            src={kamiounLogo}
            className="mt-5 w-[300px]"
            alt="Kamioun Logo"
          />
          <h2 className="-mb-2 text-center text-xl font-bold text-blueCustom">
            Summer Internship Application Test Task by
          </h2>
          <PersonalInfo />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <CreateAccount />
        <DeleteAccount />
      </div>
    </div>
  );
}

export default App;
