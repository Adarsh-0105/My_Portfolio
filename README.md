# AI Portfolio Copilot

## Live Demo

Frontend: https://my-portfolio-neon-two-2lew2okmam.vercel.app

Backend: https://my-portfolio-backend-nnoy.onrender.com

---

## Project Overview

AI Portfolio Copilot is an interactive portfolio website that allows visitors to learn about me through a conversational AI assistant. Instead of browsing a static portfolio, users can ask questions about my skills, projects, education, experience, and interests.

The AI assistant generates responses grounded in my actual portfolio data, reducing hallucinations and ensuring accurate answers.

---

## Features

* Responsive portfolio website
* About, Skills, Projects, Experience, Education, and Contact sections
* AI-powered portfolio assistant
* Context-grounded responses using portfolio data
* Full-stack architecture
* Deployed frontend and backend

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### AI

* Google Gemini API

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## System Architecture

User
↓
React Frontend
↓
Express Backend
↓
portfolio.json
↓
Gemini API
↓
AI Response

The frontend collects user questions and sends them to the backend. The backend reads portfolio data from a structured JSON file, constructs a grounded prompt, sends it to Gemini, and returns the generated response.

---

## AI Design

The AI assistant is designed to answer questions only using information available in the portfolio data.

Workflow:

1. User submits a question.
2. Backend reads portfolio.json.
3. Portfolio data is inserted into the prompt.
4. Gemini generates a grounded response.
5. Response is returned to the frontend.

If information is not available in the portfolio data, the AI politely states that it does not know.

---

## Project Structure

src/
├── components/
├── assets/
├── App.jsx

server/
├── app.js
├── portfolio.json
├── package.json

---

## Challenges Faced

* Designing a clean frontend architecture using reusable React components.
* Integrating Gemini API with a custom backend.
* Preventing AI hallucinations by grounding responses with portfolio data.
* Managing deployment across multiple platforms.
* Handling environment variables securely.

---

## Future Improvements

* Supabase integration instead of JSON storage.
* Resume upload and download support.
* Suggested AI prompts.
* Chat history persistence.
* Admin dashboard for updating portfolio content.
* Improved UI animations and accessibility.

---

## Sample Questions

1. What skills does Adarsh have?
2. Tell me about the IoT project.
3. What programming languages does Adarsh know?
4. What is Adarsh studying?
5. What are Adarsh's professional interests?
6. What experience does Adarsh have?
7. How can I contact Adarsh?

---

## Author

Kumar Adarsh

B.E. Electronics & Communication Engineering

BITS Pilani Hyderabad Campus
