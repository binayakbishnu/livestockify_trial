import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../backend/firebase';
import { useNavigate } from 'react-router-dom';
import Image from "../../assets/livestockify.png";
import google from "../../assets/devicon_google.png";
import fb from "../../assets/devicon_facebook.png";
import eyeIcon from "../../assets/bxs_hide.png";
import eyeSlashIcon from "../../assets/passshow.png";
// import backgroundImage from "../../assets/livestockifyBG.png";
import backgroundImageClouds from "../../assets/livestockifyBGClouds.png";
import backgroundImageLowRight from "../../assets/livestockifyBGLowRight.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState("farmer");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Load userType from localStorage on component mount
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((/* userCredential */) => {
        // Signed in
        // const user = userCredential.user;
        if (userType === "farmer") {
          // Directly navigate for farmers
          navigate("/farmer/dashboard");
        } else {
          // Trigger OTP modal for other user types
          setShowOtpModal(true);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };

  const onGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((/* userCredential */) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = userCredential.credential;
        // const user = userCredential.user;
        if (userType === "farmer") {
          // Directly navigate for farmers
          navigate("/farmer/dashboard");
        } else {
          // Trigger OTP modal for other user types
          setShowOtpModal(true);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    localStorage.setItem('userType', type); // Store userType in localStorage
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleOtpSubmit = () => {
    console.log("OTP submitted: ", otp.join(''));
    setShowOtpModal(false);

    //TODO: Implement OTP verification logic here and navigate to dashboard if successful
    navigate("/"); // Simulate successful login
  };

  const handleResendOtp = () => {
    //TODO: Implement resend OTP logic here
    console.log("Resend OTP");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-clip"
      style={{
        backgroundImage: `url(${backgroundImageClouds})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={backgroundImageLowRight}
        alt="illustration"
        className="absolute right-[-6%] bottom-0 h-[100%] z-0"
      />

      <a href="/" className="w-full flex justify-start absolute p-4 z-10 ">
        <img src={Image} alt="Livestockify Logo" className="h-12" />
      </a>
      <div className={`z-20 p-10 rounded-lg w-full max-w-xl ${showOtpModal ? 'blur' : ''}`}>

        <div className="mb-4">
          <div className="text-center text-3xl font-bold text-green mb-4 font-headingsFont p-2">
            Transforming Livestock Farming With Innovative Solutions
          </div>
        </div>

        {/* Role selection */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => handleUserTypeChange("farmer")}
            className={`flex-1 px-4 py-2 mx-2 font-bodyFont ${userType === "farmer"
              ? "text-green border border-green bg-[#EAF9EB] font-bold"
              : "bg-white text-[#50505099] text-opacity-50 border border-[#505050]"
              } rounded`}
          >
            Farmer
          </button>
          <button
            onClick={() => handleUserTypeChange("veterinarian")}
            className={`flex-1 px-4 py-2 mx-2 font-bodyFont ${userType === "veterinarian"
              ? "text-green border border-green bg-[#EAF9EB] font-bold"
              : "bg-white text-[#50505099] text-opacity-50 border border-[#505050]"
              } rounded`}
          >
            Veterinarian
          </button>
          <button
            onClick={() => handleUserTypeChange("organization")}
            className={`flex-1 px-4 py-2 mx-2 font-bodyFont ${userType === "organization"
              ? "text-green border border-green bg-[#EAF9EB] font-bold"
              : "bg-white text-[#50505099] text-opacity-50 border border-[#505050]"
              } rounded`}
          >
            Organization
          </button>
        </div>

        <p className="font-bold text-gray-600 text-center text-2xl mb-4 font-bodyFont">
          Log in to your Account
        </p>

        <div className="mb-4 flex justify-between">
          <button className="text-black py-2 px-4 rounded-lg flex items-center justify-center mr-2 border border-green bg-white font-bodyFont"
            onClick={onGoogleLogin}
          >
            <img
              src={google}
              alt="Google Icon"
              className="h-6 w-6 mr-2 font-sans text-sm"
            />
            Continue with Google
          </button>
          <button className="text-black py-2 px-4 rounded-lg flex items-center justify-center ml-2 border border-green bg-white font-bodyFont">
            <img
              src={fb}
              alt="Facebook Icon"
              className="h-6 w-6 mr-2 border-green"
            />
            Continue with Facebook
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-[#505050]" />
          <span className="mx-2 text-[#505050] px-2 text-sm font-bodyFont">or continue with</span>
          <hr className="flex-grow border-t border-[#505050]" />
        </div>

        {/* Email-password login */}
        <form onSubmit={onLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              className="w-full px-4 py-2 border rounded-lg bg-white border-[#505050] text-[#505050] font-bodyFont"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              title="Password must be at least 8 characters long"
              minLength="8"
              className="w-full px-4 py-2 border rounded-lg bg-white border-[#505050] text-[#505050] font-bodyFont"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 flex items-center"
            >
              <img
                src={passwordVisible ? eyeSlashIcon : eyeIcon}
                alt="Toggle Password Visibility"
                className="h-6 w-6"
              />
            </button>
          </div>
          <div className="flex justify-end items-center mb-2">
            <a href="/forgot-password" className="text-[#22592A] font-bodyFont font-bold">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-green-600 text-[#FAFFFB] py-2 px-4 rounded-lg bg-green font-bodyFont">
            Login
          </button>
        </form>

        {userType !== "farmer" &&
          <div className="text-center mt-4 font-bodyFont text-[#505050]">
            Don&apos;t have an Account?{" "}
            <a href="/register" className="text-[#22592A] font-bold font-bodyFont">
              Create an account
            </a>
          </div>
        }

      </div>

      {showOtpModal && userType !== "farmer" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 ">
          <div className="p-8 rounded-lg shadow-lg max-w-lg w-full relative border-2 border-solid border-green" style={{
            backgroundImage: `url(${backgroundImageClouds})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "screen",
          }}>
            <h2 className="text-2xl font-bold text-[#505050] mb-4 text-center font-bodyFont">Enter OTP</h2>
            <div className="flex justify-center space-x-2 mb-8 mt-10">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleOtpChange(e, index)}
                  className="w-14 h-16 rounded-lg text-center text-lg bg-white border-2 border-solid border-[#50505080] text-[#000000] font-bodyFont"
                />
              ))}
            </div>
            <center>
              <button
                onClick={handleOtpSubmit}
                className="w-40 bg-green-600 text-[#FAFFFB] bg-green py-2 px-4 rounded-lg mb-2 font-bodyFont"
              >
                Submit
              </button>
            </center>
            <div className="text-center">
              <button onClick={handleResendOtp} className="text-green font-bold font-bodyFont">
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
