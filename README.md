<h1 align="center"> SocialX </h1>
<p align="center"> Connecting Communities, Empowering Conversations with AI. </p>

<p align="center">
  <img alt="Build" src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge">
  <img alt="Issues" src="https://img.shields.io/badge/Issues-0%20Open-blue?style=for-the-badge">
  <img alt="Contributions" src="https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge">
</p>
<!--
  **Note:** These are static placeholder badges. Replace them with your project's actual badges.
  You can generate your own at https://shields.io
-->

## 📖 Table of Contents
- [⭐ Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [🚀 Getting Started](#-getting-started)
- [🔧 Usage](#-usage)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

## ⭐ Overview
SocialX is an innovative, AI-powered social platform designed to foster dynamic communities and intelligent interactions through cutting-edge technology.

> ❓ **The Problem:** In an increasingly interconnected world, traditional social platforms often fall short in providing truly engaging and intelligent conversational experiences. Users seek more meaningful interactions, real-time assistance, and dynamic content tailored to their community needs, moving beyond passive consumption to active participation.

> 💡 **The Solution:** SocialX addresses this by integrating a sophisticated AI chatbot directly into its core, transforming passive social browsing into an interactive and responsive experience. By leveraging a robust backend API, SocialX empowers communities with smart communication tools and a seamless user interface, enhancing engagement and facilitating richer, more intuitive social connections.

**Inferred Architecture:**
SocialX employs a classic client-server architecture. The **backend** is powered by Django and Django REST Framework, providing a robust API layer for data management, user interactions, and the integrated AI chatbot functionality (located within the `langflow_app`). It interacts with a `sqlite3` database for data persistence. The **frontend** is a responsive web application built with standard web technologies (HTML, CSS, JavaScript), consuming the backend API to deliver a dynamic and interactive user experience.

## ✨ Key Features
*   **AI-Powered Conversational Agent:** At the heart of SocialX is a `ChatbotAPI` within the `langflow_app`, offering intelligent, real-time interactions to enhance user engagement, provide support, or facilitate guided conversations within communities.
*   **Robust Backend API:** Built with Django REST Framework, SocialX provides a scalable and well-structured API, allowing seamless data exchange and interaction between the frontend and the core application logic, including sophisticated chat functionalities.
*   **Dynamic Frontend Experience:** A clean, intuitive, and highly interactive user interface crafted with HTML, CSS, and JavaScript, ensuring a smooth and engaging user journey across the platform.
*   **Community-Centric Design:** Engineered to support social interactions and community building, SocialX provides the foundational tools necessary for users to connect, share, and communicate effectively.
*   **Secure Configuration Management:** Utilizes `python-decouple` to manage sensitive configuration settings, ensuring a secure and portable development and deployment environment.

## 🛠️ Tech Stack & Architecture

| Technology             | Purpose                            | Why it was Chosen                                            |
| :--------------------- | :--------------------------------- | :----------------------------------------------------------- |
| **Django**             | Web Framework (Backend)            | Renowned for its "batteries-included" philosophy, security, and rapid development capabilities for complex web applications. |
| **Django REST Framework** | API Development Framework          | Extends Django's capabilities to build powerful, scalable, and standards-compliant RESTful APIs with ease, supporting complex data structures. |
| **`sqlite3`**          | Database                           | A lightweight, file-based database ideal for development, testing, and small-to-medium scale deployments due to its simplicity and embedded nature. |
| **`requests`**         | HTTP Client for Python             | A simple yet powerful HTTP library for making web requests, likely used for interacting with external services or internal microservices. |
| **`python-decouple`**  | Environment Variable Management    | Enables clean separation of configurations from the codebase, enhancing security and maintainability for different deployment environments. |
| **HTML5, CSS3, JavaScript** | Frontend Development               | The foundational trio for web development, chosen for universal browser compatibility, rich interactive capabilities, and broad developer ecosystem. |

## 🚀 Getting Started

To get a local copy of SocialX up and running, follow these simple steps.

### Prerequisites
Before you begin, ensure you have the following installed:
*   Python 3.8+
*   `pip` (Python package installer, usually comes with Python)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/SocialX.git # Replace with your repo URL
    cd Darsh-8-SocialX-50d2f08 # Navigate to the project root
    ```

2.  **Navigate to the backend directory:**
    ```bash
    cd SocialX Backend
    ```

3.  **Create and activate a Python virtual environment:**
    ```bash
    python -m venv venv
    # On Windows
    .\venv\Scripts\activate
    # On macOS/Linux
    source venv/bin/activate
    ```

4.  **Install backend dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

5.  **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

6.  **(Optional) Create a superuser for admin access:**
    ```bash
    python manage.py createsuperuser
    ```

## 🔧 Usage

Once the backend is set up, you can run the server and access the frontend.

1.  **Start the Django backend server:**
    From the `SocialX Backend` directory:
    ```bash
    python manage.py runserver
    ```
    The server will typically run on `http://127.0.0.1:8000/`.

2.  **Access the Frontend:**
    Open the `SocialX Frontend/index.html` file directly in your web browser. The JavaScript (`script.js`) will interact with the running backend API.

3.  **Interacting with the Chatbot API:**
    You can test the `ChatbotAPI` endpoint (inferred to be at `/api/chatbot/` or similar based on `langflow_app` and `views.py`) using `curl` or a tool like Postman. Assuming a POST request to `/langflow_app/chatbot/`:

    ```bash
    curl -X POST \
         http://127.0.0.1:8000/langflow_app/chatbot/ \
         -H 'Content-Type: application/json' \
         -d '{
             "message": "Hello, tell me about SocialX."
         }'
    ```
    *(Note: The exact URL path for `ChatbotAPI` would be defined in `langflow_app/urls.py` and `SocialX/urls.py`.)*

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
