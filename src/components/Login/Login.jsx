import { useState } from "react";
import React from "react";
import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import AxiosWrapper from "../../services/BaseService";
const axios = new AxiosWrapper();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakeLoginUser(creds) {
  await sleep(1000);
  if (creds.email === "admin@gmail.com" && creds.password === "admin@123") {
    localStorage.setItem("loggedin", true);
    return {
      email: creds.email,
      token: "1234567890abcdef",
    };
  }
  throw new Error("Couldn't log the user in");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/protected";
  try {
    const user = await fakeLoginUser({ email, password });
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

const Login = () => {
  // const [userData, setUserData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleUserDataSubmit = () => {
  //   if (userData.email && userData.password) {
  //     axios.post("user/login", userData);
  //   }
  // };

  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <>
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full bg-white ">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The Lotus Team
                        </h4>
                      </div>

                      <Form
                        method="post"
                        replace
                        className="h-full flex flex-col gap-2 items-center justify-center"
                      >
                        {errorMessage && (
                          <h4 className="red">{errorMessage}</h4>
                        )}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          className="w-[50%] h-[35px] rounded-xl"
                        />
                        <br />
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="w-[50%] h-[35px] rounded-xl"
                        />
                        <br />
                        <button
                          className="bg-black w-[50%] h-[35px] rounded-xl"
                          disabled={navigation.state === "submitting"}
                        >
                          {navigation.state === "submitting"
                            ? "Logging in ..."
                            : "Log in"}
                        </button>
                      </Form>
                    </div>
                  </div>

                  <div
                    className="flex h-[93vh] items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
