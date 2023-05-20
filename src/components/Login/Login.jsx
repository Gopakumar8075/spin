import React from "react";
import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
// import AxiosWrapper from "../../services/BaseService";
// const axios = new AxiosWrapper();

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
    new URL(request.url).searchParams.get("redirectTo") || "/game";
  try {
    await fakeLoginUser({ email, password });
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
      <section class="h-screen p-20">
        <div class="h-full">
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-evenly">
            <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image"
              />
            </div>

            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-3/12 xl:w-3/12">
              <Form method="post" replace className="space-y-4 md:space-y-6">
                {errorMessage && <h4 className="red">{errorMessage}</h4>}
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <br />
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <br />
                <button
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={navigation.state === "submitting"}
                >
                  {navigation.state === "submitting"
                    ? "Logging in ..."
                    : "Log in"}
                </button>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
