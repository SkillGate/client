"use client";

import { imageUrl } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { FaBriefcase, FaUserClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const data = [
    {
        id: '1',
        companyName: 'X-Venture',
        companyLogo: '',
        jobType: 'Full Time',
        modality: 'Remote',
        position: 'Software Engineer',
        location: 'Colombo7, Sri Lanka',
    },
    {
        id: '1',
        companyName: '99-X',
        companyLogo: '',
        jobType: 'Internship',
        modality: 'Remote',
        position: 'React Developer',
        location: 'Nugegoda, Sri Lanka',
    },
    {
        id: '1',
        companyName: 'Cake',
        companyLogo: '',
        jobType: 'Internship',
        modality: 'Onsite',
        position: 'Quality Engineer',
        location: 'Rajagiriya, Sri Lanka',
    },
    {
        id: '1',
        companyName: 'Linear Six',
        companyLogo: '',
        jobType: 'Internship',
        modality: 'Hybrid',
        position: 'Deveops Engineer',
        location: 'Colombo7, Sri Lanka',
    },
    {
        id: '1',
        companyName: 'Creative Software',
        companyLogo: '',
        jobType: 'Full Time',
        modality: 'On-site',
        position: 'Software Engineer',
        location: 'Malabe, Sri Lanka',
    },
    {
        id: '1',
        companyName: 'Eat Me',
        companyLogo: '',
        jobType: 'Full Time',
        modality: 'Hybrid',
        position: 'Software Engineer',
        location: 'Kottawa, Sri Lanka',
    },
];

const Content = () => {

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {data.map((item) => (
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex flex-col-2 justify-between">
                            <div>
                                <div className="flex flex-col-2 items-center justify-center">
                                    <Link href="/">
                                        <Image
                                            src={imageUrl[0].url}
                                            alt={imageUrl[0].alt}
                                            width={158}
                                            height={30}
                                            className="object-contain"
                                        />
                                    </Link>
                                    <span className="">{item.companyName}</span>
                                </div>
                            </div>
                            <button className="text-blue-600 py-2 px-4">Apply</button>
                        </div>
                        <h4 className="pl-2 font-bold">{item.position}</h4>
                        <div className="p-4">
                            <div className="flex items-center">
                                <FaBriefcase className="text-gray-500 mr-4" />
                                <p className="text-gray-600">{item.jobType}</p>
                            </div>
                            <div className="flex items-center">
                                <FaUserClock className="text-gray-500 mr-4" />
                                <p className="text-gray-600">{item.modality}</p>
                            </div>
                            <div className="flex items-center">
                                <MdLocationOn className="text-gray-500 mr-4" />
                                <p className="text-gray-600">{item.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
