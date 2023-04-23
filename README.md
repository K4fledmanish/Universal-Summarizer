# Universal-Summarizer

Universal Summarizer is a powerful AI tool that allows users to input a URL and receive a summary of the content or extract important data from the linked page. This application is built using the Vite framework, React, JavaScript, Redux Toolkit, OpenAI API, and RapidAPI Studio.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Features

- Summarize any web page or article
- Extract important data from a given URL
- Clean and responsive user interface

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>=12.0.0)
- npm (>=7.0.0)
- A Rapid API key
- OpenAI Knowledge

### Installation

1. Clone the repository
2. Change to the project directory : `cd ...`
3. Install dependencies : `npm install`
4. Create a `.env` file in the root directory of the project and add your Rapid API Keys:   `REACT_APP_RAPID_API_KEY=your_rapid_api_key`
5. Start the development server : `npm run dev`

This will open the application in your default web browser at `http://localhost/...`.


## Usage

To use the application, simply enter a link URL in the provided text box. Universal Summarizer will then process the link using OpenAI API and RapidAPI's Chatgpt Text Summarizer API to generate a summary. All threads are locally stored, ensuring a smooth user experience.


## Contributing

If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and commit them with a descriptive message.
- Push your changes to your forked repository.
- Create a pull request to merge your changes into the main repository.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

