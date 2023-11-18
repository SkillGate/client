"use client";

import { imageUrl } from "@/constants";
// import { auth } from "@/app/firebase";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const CandidateRegistration = () => {
    // const googleAuth = new GoogleAuthProvider();
    // const login = async () => {
    //     const result = await signInWithPopup(auth, googleAuth);
    // };
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-15 w-auto" src={imageUrl[0].url} alt={imageUrl[0].alt} />
                <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
            </div>
        </div>

    );
};

export default CandidateRegistration;
