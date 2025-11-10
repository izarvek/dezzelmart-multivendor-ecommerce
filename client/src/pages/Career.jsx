import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { CiUser, CiMail } from "react-icons/ci";
import { BsFillSendFill } from "react-icons/bs";
import { banners } from "../assets/career/assetsCareer";
import Title from "../components/templates/Title";
import CardsCareer from "../components/cards/CardsCareer";

const Career = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 mt-10">
      <div>
        <img className="rounded-lg " src={banners.banner01} alt="" />
      </div>
      <div className="flex flex-col md:flex-row mt-20 gap-10 mb-20">
        <div className="mb-10 w-full md:w-[60%] lg:w-[50%]">
          <div className="flex gap-2 items-center ">
            <GoDotFill className="text-orange-400 text-[8px]" />
            <p className="text-sm font-semibold poppins-regular">
              Opportunities Await
            </p>
          </div>
          <div className="text-5xl mt-4">
            <h2 className="font-semibold poppins-regular text-orange-600">
              Find your next
            </h2>
            <h2 className="font-semibold poppins-regular">career move</h2>
          </div>
          <p className="poppins-regular mt-6">
            Explore job offers that match your skills and ambitions. Discover
            new roles and take the nest step in your professional journey.
          </p>
        </div>

        <div className="">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BsFillSendFill className="mr-3 text-orange-600" />
            Submit Your Application
          </h2>
          <p className="text-gray-700 poppins-regular mb-8 max-w-2xl">
            Can't find a perfect match above? Feel free to submit your resume
            for general consideration, and we'll keep you in mind for future
            opportunities.
          </p>
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="applicantName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <CiUser className="inline w-4 h-4 mr-2 text-gray-500" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="applicantName"
                // value={applicantName}
                // onChange={(e) => setApplicantName(e.target.value)}
                // disabled={formLoading}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="applicantEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <CiMail className="inline w-4 h-4 mr-2 text-gray-500" />
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="applicantEmail"
                // value={applicantEmail}
                // onChange={(e) => setApplicantEmail(e.target.value)}
                // disabled={formLoading}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label
                htmlFor="resumeFile"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <FaRegFileAlt className="inline w-4 h-4 mr-2 text-gray-500" />
                Resume/CV <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="resumeFile"
                // onChange={(e) => setResumeFile(e.target.files[0])}
                // disabled={formLoading}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0  file:text-sm file:font-semibold  file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer disabled:opacity-50
                 disabled:cursor-not-allowed"
                accept=".pdf,.doc,.docx"
                required
              />
              {false && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected file: {resumeFile.name}
                </p>
              )}
            </div>

            {/* Cover Letter (Optional) */}
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <FaRegFileAlt className="inline w-4 h-4 mr-2 text-gray-500" />
                Cover Letter (Optional)
              </label>
              <textarea
                id="coverLetter"
                // value={coverLetter}
                // onChange={(e) => setCoverLetter(e.target.value)}
                // disabled={formLoading}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y"
                placeholder="Tell us about yourself and why you're a great fit for our team..."
              ></textarea>
            </div>

            {/* Form Message */}
            {false && (
              <div
                className={`p-3 rounded-md text-sm font-semibold border ${
                  formIsError
                    ? "bg-red-100 border-red-500 text-red-800"
                    : "bg-green-100 border-green-500 text-green-800"
                }`}
              >
                {formMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              // disabled={formLoading}
              className="w-full flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 uppercase tracking-wide shadow-md disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
            >
              {false ? (
                <>
                  <FiLoader className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <BsFillSendFill className="w-5 h-5 mr-2" />
                  Submit Application
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <div>
        <Title
          title={"Shape the Future with us"}
          description={
            "We are always looking for passionate and talented individuals to join our growing team. Explore our current openings and find your next career opportunity."
          }
        />
      </div>
      <CardsCareer/>
    </div>
  );
};

export default Career;
