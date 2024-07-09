import React from 'react';
import { FaTwitter, FaGithubAlt, FaMediumM, FaLinkedin } from 'react-icons/fa';
import ProfilePic1 from "../assets/profile-1.png";
import ProfilePic2 from "../assets/sammy.png";

const About = () => {
  return (
    <section id="about-us-section" className="py-12 bg-whitesmoke-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <br />
          <br />
          <br />
          <h2 className="text-4xl font-bold mb-8">About BookWave</h2>
          <p className="text-lg mb-8">
            BookWave is more than just an ebook platform. We are passionate
            about connecting readers with their next great read and fostering a
            vibrant community around literature.
          </p>
          <p className="text-lg mb-8">
            Our platform offers a curated selection of ebooks across various
            genres, seamless purchasing and download options, user reviews,
            personalized recommendations, and interactive features to enhance
            your reading experience.
          </p>
          <p className="text-lg mb-8">
            Meet the minds behind BookWave:
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 rounded p-6 flex items-center">
              <img
                className="source-profile w-24 h-24 rounded-full mr-6"
                src={ProfilePic1}
                alt="Samuel Waweru"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Samuel Waweru</h3>
                <p className="text-gray-600 mb-4">Front-End Developer & Designer</p>
                <ul className="social-list flex space-x-4">
                  <li>
                    <a href="https://x.com/Samu_elKE">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mogulsam">
                      <FaGithubAlt />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@samuel-mogul">
                      <FaMediumM />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/samuel-mogul/">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-100 rounded p-6 flex items-center">
              <img
                className="source-profile w-24 h-24 rounded-full mr-6"
                src={ProfilePic2}
                alt="Sammy Obonyo"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">Sammy Obonyo</h3>
                <p className="text-gray-600 mb-4">Back-End Developer</p>
                <ul className="social-list flex space-x-4">
                  <li>
                    <a href="https://x.com/obonyo_sammy">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SammyObeezy">
                      <FaGithubAlt />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@SammyObeezy">
                      <FaMediumM />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sammy-obonyo-2a17b91a9/">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default About;
