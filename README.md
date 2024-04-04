# StavsWay

StavsWay is a comprehensive software solution developed as a final project for a software engineering course within a first degree in computer science. This application aims to provide a direct interface between donors, volunteers, and recipients to facilitate the donation and volunteering process, with a focus on reducing food insecurity and food waste.

## Table of Contents

- [Features](#features)
- [System Structure](#system-structure)
- [Project Structure](#project-structure)
- [Client-Side Application](#client-side-application)
- [Getting Started](#getting-started)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)

## Features

- **Donor Interface:** Allows donors to upload information about the food they wish to donate, including type, quantity, location, and collection time.
- **Volunteer Interface:** Enables volunteers to view available donations and choose which ones they want to participate in based on their location and availability.
- **Recipient Interface:** Provides recipients with a list of available donations nearby and allows them to select the ones they need.
- **Real-Time Matching:** Automatically matches donations with recipients and volunteers, ensuring efficient and timely distribution.
- **User Profiles:** Each user type (donor, volunteer, recipient) has a personalized profile with relevant information and history.

**Application usage video:**
<video width="320" height="240" controls>
  <source src="app.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## System Structure

- **Frontend:** Developed using React.js, providing an intuitive and responsive user interface.
- **Backend:** Built with Node.js, handling server-side logic, database interactions, and API endpoints.
- **Database:** Utilizes Firebase for storing and managing user data, donations, and matches.

## Project Structure

The project is structured as follows:

- `src/`: Contains all source code for the client-side application.
- `components/`: Houses reusable React components used throughout the application.
- `pages/`: Includes files for each distinct page of the application.
- `services/`: Contains services for API calls and other external interactions.
- `utils/`: Provides utility functions and constants used across the application.

## Client-Side Application

The client-side application is designed to be user-friendly and accessible. It consists of various screens tailored to each user type, providing a seamless experience for managing donations, volunteering, and receiving assistance.

## Getting Started

To run the StavsWay application locally:

1. Clone the repository:
git clone https://github.com/BatelCohen7/StavsWay.git


2. Navigate to the project directory:
cd StavsWay


3. Install dependencies:
npm install


4. Start the development server:
npm start


5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Contributors

- Batel Cohen
- Liav Levy
- Yael Gabai
- Yulia Vaknish (Katz)

## Acknowledgments

Special thanks to our course instructors and classmates for their support and feedback throughout
