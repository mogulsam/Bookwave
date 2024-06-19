# Bookwave




BookWave
BookWave is a web application that allows users to browse and download ebooks for free. The platform aims to provide an easy-to-use interface where users can discover, search, and download a wide variety of ebooks.

Table of Contents
Project Overview
Features
Technologies Used
Installation
Usage
Data Model
API Endpoints
Contributing
Team
License
Project Overview
BookWave is designed to offer a simple and efficient way for users to access ebooks without the need for user registration. The platform showcases various ebooks, allowing users to download them directly from the website.

Features
Browse Ebooks: Users can browse a collection of ebooks categorized by different genres and authors.
Search Functionality: Users can search for specific ebooks by title or author.
Free Downloads: All ebooks are available for free download.
Responsive Design: The web app is optimized for both desktop and mobile devices.
Technologies Used
Frontend:

HTML
CSS
JavaScript
Bootstrap
Backend:

Python (Flask)
Database:

SQLite
Tools:

Git
GitHub
Trello (Project Management)
Installation
To run the BookWave project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/mogulsam/bookwave.git
cd bookwave
Create a virtual environment:

bash
Copy code
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
Install the dependencies:

bash
Copy code
pip install -r requirements.txt
Set up the database:

bash
Copy code
flask db init
flask db migrate -m "Initial migration."
flask db upgrade
Run the application:

bash
Copy code
flask run
Access the application:
Open your web browser and go to http://127.0.0.1:5000

Usage
Once the application is running, you can use the following features:

Browse Ebooks: Explore the collection of ebooks on the homepage.
Search Ebooks: Use the search bar to find specific titles or authors.
Download Ebooks: Click on the download button to get a copy of the ebook.
Data Model
The database schema consists of two tables: Ebooks and Downloads.

Ebooks Table
Column Name	Data Type	Description
id (PK)	Integer	Unique identifier for each ebook
title	String	Title of the ebook
author	String	Author of the ebook
description	String	Description of the ebook
cover_image_url	String	URL of the ebook's cover image
download_url	String	URL to download the ebook
Downloads Table
Column Name	Data Type	Description
id (PK)	Integer	Unique identifier for each download record
ebook_id (FK)	Integer	Foreign key referencing the Ebooks table
download_date	DateTime	Timestamp of when the download occurred

Contributing
We welcome contributions to the BookWave project. To contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes and commit them with clear messages.
Push your changes to your forked repository.
Create a pull request to the main repository.
Please ensure your code follows our coding standards and includes appropriate tests.

#Team
Sammy Obonyo - Backend Developer
Samuel Mogul - Frontend Developer
License
This project is licensed under the MIT License. See the LICENSE file for more details
