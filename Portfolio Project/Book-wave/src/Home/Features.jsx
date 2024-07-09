import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CoverImage from '../assets/devbook-devices.png'; 

const FeaturesSection = () => {
  return (
    <section id="content-section" className="bg-whitesmoke-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <div className="figure-holder mb-5">
                <img className="md:h-auto md:max-w-full rounded" src={CoverImage} alt="Cover Image" />
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <div className="key-points mb-4 text-left">
                <ul className="key-points-list list-none space-y-2">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    Extensive Ebook Library.
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    Seamless Purchases & Download.
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    User Reviews and Ratings.
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    Community Engagement.
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    Flexible Reading Options.
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    Regular Updates and New Releases.
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    Interactive Features.
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 mr-2" />
                    Personalized Recommendations.
                  </li>
                </ul>
                <div className="text-center mt-4">
                  <Link to="/shop">
                    <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded hover:bg-orange-700 transition-all duration-300">
                      Join BookWave
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
