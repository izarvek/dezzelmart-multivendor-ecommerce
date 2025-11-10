import React from 'react'
import { jobOptions } from '../../assets/career/assetsCareer'
import { Briefcase, MapPin, DollarSign, Calendar } from 'lucide-react';

const CardsCareer = () => {
  return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {jobOptions.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg border-[1px] border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-4"
          >
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              {job.title}
            </h3>
            <div className="text-sm text-gray-600 mb-4 flex flex-wrap gap-x-4 gap-y-2">
              <span className="flex items-center">
                <Briefcase size={16} className="mr-1 text-gray-500" />{" "}
                {job.type}
              </span>
              <span className="flex items-center">
                <MapPin size={16} className="mr-1 text-gray-500" />{" "}
                {job.location}
              </span>
              <span className="flex items-center">
                <DollarSign size={16} className="mr-1 text-gray-500" />{" "}
                {job.salary}
              </span>
              <span className="flex items-center">
                <Calendar size={16} className="mr-1 text-gray-500" /> Posted:{" "}
                {job.postedDate}
              </span>
            </div>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {job.description}
            </p>

            <h4 className="font-semibold text-gray-800 mb-2 text-sm">
              Responsibilities:
            </h4>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-sm ml-2">
              {job.responsibilities.map((res, idx) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>

            <h4 className="font-semibold text-gray-800 mb-2 text-sm">
              Requirements:
            </h4>
            <ul className="list-disc list-inside text-gray-600 mb-4 text-sm ml-2">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>

            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-400 transition duration-200">
              Apply for this role
            </button>
          </div>
        ))}
      </div>
  )
}

export default CardsCareer