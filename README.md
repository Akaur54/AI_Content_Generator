# 🧠 AI Content Generator

An AI-powered content generation platform that helps users create high-quality, context-aware content using the **Google Gemini API**. Built with **Next.js**, **Clerk** for authentication, and **PostgreSQL** for data storage, this application features a clean UI, secure authentication, and highly efficient architecture — ideal for creators, marketers, and businesses.

---

## 🌟 Features

- 🔐 Secure user authentication with Clerk  
- 🧠 AI-based content generation using Google Gemini API  
- 🗃️ Store & manage generated content in PostgreSQL  
- ⚡ Blazing-fast performance with server-side rendering (SSR) via Next.js  
- 🎨 Clean and responsive UI built with TailwindCSS  
- 🧩 Modular, scalable, and developer-friendly codebase  

---

## 🧰 Tech Stack

| Tech                | Purpose                                      |
|---------------------|----------------------------------------------|
| **Next.js**         | Frontend framework & API routes              |
| **Clerk**           | Authentication and user session management   |
| **PostgreSQL**      | Relational database for storing content      |
| **Google Gemini API** | AI model for content generation           |
| **TailwindCSS**     | Styling and responsive design                |

---

## 🚀 Getting Started

Follow the steps below to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-content-generator.git
cd ai-content-generator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env.local` File

Add your environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_postgresql_database_url
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. Set Up the Database (Using Prisma)

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 📁 Folder Structure

```
ai-content-generator/
├── components/         # Reusable UI components (Header, Form, Output, etc.)
├── pages/              # Next.js pages and API routes
│   ├── api/            # Backend API handlers (content generation, auth)
│   └── index.tsx       # Main application page
├── lib/                # Utility functions (Gemini API calls, etc.)
├── public/             # Static assets
├── styles/             # Global styles and Tailwind config
├── middleware.ts       # Clerk middleware for authentication
├── .env.local          # Environment variables
└── README.md           # Project documentation
```

---

## 🔐 Authentication (Clerk)

- Users can securely sign up and log in with Clerk  
- Sessions are managed across client and server  
- Routes are protected using `withClerkMiddleware`  
- Each piece of content is stored and accessed per user  

---

## 🤖 AI Content Generator (Google Gemini)

- Integrates **Google Gemini API** for content generation  
- Supports multiple content types:
  - ✍️ Blog Posts  
  - ✉️ Email Content  
  - 📱 Social Media Captions  
  - 🛍️ Product Descriptions  
- Outputs are stored in **PostgreSQL** for each authenticated user  

---

## 🗄️ Database (PostgreSQL via Prisma)

**Prisma** is used to manage the PostgreSQL database.

Example schema:

\`\`\`prisma
model Content {
  id        String   @id @default(uuid())
  userId    String
  title     String
  body      String
  createdAt DateTime @default(now())
}
\`\`\`

---

## 🖼️ UI Preview

| Dashboard | Content Generator |
|-----------|-------------------|
| ![Login](https://github.com/user-attachments/assets/513c36d0-f216-4e50-b28f-9c6a5ff34d8b) | ![Dashboard](https://github.com/user-attachments/assets/af2b7a9a-75dc-4f48-bebf-36a55c30ca91) |

---

## 📌 Upcoming Features

- 🖼️ AI-generated image support  
- 🌙 Dark mode toggle  
- 📁 User folders for organizing content  
- 📄 Export to PDF/Markdown  
- 🔗 Shareable public links  
- 📊 Admin panel for analytics  

---

## 👩‍💻 Developer

**Amanpreet Kaur**  
Creative Full-Stack Developer | Passionate about AI & UI/UX  

📧 **Email**: [amanpreetkaur42756@gmail.com](mailto:amanpreetkaur42756@gmail.com)  
🌐 **Portfolio**: [portfolio-nu-lake-63.vercel.app](https://portfolio-nu-lake-63.vercel.app/)  
🐙 **GitHub**: [@Akaur54](https://github.com/Akaur54)  
🔗 **LinkedIn**: [@amanpreet-kaur1209](https://www.linkedin.com/in/amanpreet-kaur1209)  

---

## 🤝 Contributing

Want to contribute? Follow these steps:

1. Fork the repo  
2. Create a feature branch: `git checkout -b feature/awesome-feature`  
3. Commit your changes: `git commit -m 'Add awesome feature'`  
4. Push to the branch: `git push origin feature/awesome-feature`  
5. Open a Pull Request 🎉  

---

## 🪪 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## 🙌 Support

If you like this project, feel free to give it a ⭐ and share it!  
Need help? Reach out to me via **Instagram** or **email**.

---

**Built with ❤️ by Amanpreet Kaur — Empowering content creation with AI.**
