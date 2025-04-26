import { useState } from "react";
import { ButtonEvent, InputEvent } from "../configs/types";
import axios, { AxiosError } from "axios";
import { API_URL } from "../configs/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    userName: "",
    password: "",
  });
  const navigate = useNavigate()

  const onSubmit = async (e: ButtonEvent) => {
    e.preventDefault();
    if(!data.userName && !data.password) return
    if (currentState === "Sign Up") {
      try {
        const response = await axios.post(`${API_URL}/register`, data);
        if (response.status === 200) {
          if (response.data.userName) setCurrentState("Login");
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            toast.error(error.response.data); 
          } else if (error.request) {
            toast.error("No response from the server");
          } else {
            toast.error("An error occurred while setting up the request");
          }
        } else {
          toast.error("An unknown error occurred");
        }
      }
    }else{
      try {
        const response = await axios.post(`${API_URL}/login`, data);
        if (response.status === 200) {
          if (response.data.userName) {
            toast.info('Successfully logged in');
            navigate('/')
            localStorage.setItem('ua',response.data.userName)
          }
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            toast.error(error.response.data); 
          } else if (error.request) {
            toast.error("No response from the server");
          } else {
            toast.error("An error occurred while setting up the request");
          }
        } else {
          toast.error("An unknown error occurred");
        }
      }
    }
  };

  const handleChange = (e: InputEvent) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        {/* <hr className="border-none bg-gray-800 h-[1.5px] w-8" /> */}
      </div>
      {currentState === "Sign Up" && (
        <input
          onChange={handleChange}
          value={data.name}
          className="w-full px-3 py-2 border border-gray-700 rounded"
          placeholder="Name"
          type="text"
          required
          name="name"
          id="name"
        />
      )}
      <input
        onChange={handleChange}
        value={data.userName}
        className="w-full px-3 py-2 border border-gray-700 rounded"
        placeholder="User Name"
        type="userName"
        required
        name="userName"
        id="userName"
      />
      <input
        onChange={handleChange}
        value={data.password}
        className="w-full px-3 py-2 border border-gray-700 rounded"
        placeholder="Password"
        type="password"
        required
        name="password"
        id="password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password ?</p>
        {currentState === "Sign Up" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create an account
          </p>
        )}
      </div>
      <button onClick={(e) => onSubmit(e)} className="btn-default !mt-[-4px]">
        {currentState === "Sign Up" ? "Register" : "Sign In"}
      </button>
    </form>
  );
};

export default Login;
