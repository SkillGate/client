"use client";

import { imageUrl } from "@/constants";
import { auth } from "@/app/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const LoginPage = () => {
    const [user, setUse] = useAuthState(auth);
    const googleAuth = new GoogleAuthProvider();
    const login = async () => {
        const result = await signInWithPopup(auth, googleAuth);
    };
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-15 w-auto" src={imageUrl[0].url} alt={imageUrl[0].alt} />
                <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 pl-5" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-purple-600 hover:text-purple-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 pl-5" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
                    </div>
                </form>

                <div className="mt-7 flex w-full justify-center">
                    <p className="centered-text">Or continue with</p>
                </div>
                <div>
                    <button
                        type="button"
                        className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 mt-6"
                        onClick={login}>
                        <img className="h-6 w-auto mr-4" src={imageUrl[2].url} alt={imageUrl[2].alt} />
                        Google
                    </button>
                </div>

                <p className="mt-10 text-center text-sm text-gray-500">
                    New to SkillGate?
                    <a href="/candidateregistration" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">Register</a>
                </p>
            </div>
        </div>

    );
};

export default LoginPage;
