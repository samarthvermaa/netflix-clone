import { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";

enum variantTypes {
  LOGIN = "login",
  REGISTER = "register",
}

const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = () => {
    setVariant((prevVariant) =>
      prevVariant === variantTypes.LOGIN
        ? variantTypes.REGISTER
        : variantTypes.LOGIN
    );
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex flex-row justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl font-semibold mb-8">
              {variant === variantTypes.LOGIN ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === variantTypes.REGISTER && (
                <Input
                  id="username"
                  value={userName}
                  label="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              )}
              <Input
                id="email"
                value={email}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                value={password}
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              title={variant === variantTypes.LOGIN ? "Login" : "Sign Up"}
            />
            <p className="text-neutral-500 mt-12">
              {variant === variantTypes.LOGIN
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === variantTypes.LOGIN ? "Create an Account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
