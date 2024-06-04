import React, { useState } from "react";
import TextField from "../Components/TextField";
import DropDownMenu from "../Components/DropDownMenu";
import Checkbox from "../Components/Checkbox";
import ButtonComp from "../Components/ButtonComp";

const passwordConstraints = [
  { regex: /.{6,}/, message: "6 characters long" },
  { regex: /[A-Z]/, message: "one uppercase character" },
  { regex: /[0-9]/, message: "one number" },
  { regex: /[^A-Za-z0-9]/, message: "one special character" },
];

const initialFormData = {
  email: "",
  password: "",
  experience: "",
  rememberMe: false,
};

const CreateAccount = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isExperienceValid, setIsExperienceValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(
    "Password must contain at least "
  );
  const options = [
    { label: "less than 1 year", value: "0" },
    { label: "1 year", value: "1" },
    { label: "2 years", value: "2" },
    { label: "3 years", value: "3" },
    { label: "+3 years", value: "4" },
  ];

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, experience } = formData;

    const isPasswordLengthValid = passwordConstraints.every(({ regex }) =>
      regex.test(password)
    );
    setIsPasswordValid(isPasswordLengthValid);

    const isEmailFormatValid = /^\S+@\S+\.\S+$/.test(email);
    setIsEmailValid(isEmailFormatValid);

    const isExperienceSelected = experience !== "";
    setIsExperienceValid(isExperienceSelected);

    if (isPasswordLengthValid && isEmailFormatValid && isExperienceSelected) {
      console.log(formData);
      setShowSuccessPopup(true);
      setFormData(initialFormData);
    } else {
      const failedConstraints = passwordConstraints.filter(
        ({ regex }) => !regex.test(password)
      );
      const errorMessages = failedConstraints
        .map(({ message }) => message)
        .join(", ");
      setPasswordErrorMessage(`Password must contain at least ${errorMessages}`);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="scale-90 bg-white w-[35%] rounded-2xl p-8 shadow-xl">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-blue-500">Create Account</h1>
        <span className=" mt-2 text-center">
          Create your account in a second to receive our latest news!
        </span>
        <form
          className="w-full flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <TextField
            type="email"
            placeholder="Email"
            className="w-full"
            required={true}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            isValid={isEmailValid}
            errorMessage="Please enter a valid email address."
          >
            Email
          </TextField>
          <TextField
            extraDetails="At least 6 characters, 1 uppercase, 1 special character, 1 number"
            placeholder="Password"
            type="password"
            className="w-full"
            required={true}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            isValid={isPasswordValid}
            errorMessage={passwordErrorMessage}
          >
            Password
          </TextField>
          <DropDownMenu
            options={options}
            className="w-full"
            value={formData.experience}
            onChange={(value) => handleInputChange("experience", value)}
            isValid={isExperienceValid}
            errorMessage="Please select your years of experience."
          >
            Years of experience
          </DropDownMenu>
          <div className="flex items-center justify-start w-full my-2">
            <Checkbox
              checked={formData.rememberMe}
              onChange={(e) =>
                handleInputChange("rememberMe", e.target.checked)
              }
            >
              Remember me
            </Checkbox>
          </div>
          <ButtonComp type="submit">Create Account</ButtonComp>
        </form>
      </div>
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg flex flex-col gap-3">
            <h2 className="text-2xl font-bold mb-4">
              Account Creation Successful
            </h2>
            <p>Your account has been successfully created.</p>
            <ButtonComp onClick={handleClosePopup}>Close</ButtonComp>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;
