# WebVibe — Full-Stack Agency Website

A React (Vite + Tailwind) frontend and an Express + MongoDB backend for the WebVibe agency site.
The contact form on the site submits directly to the backend, which saves each lead into MongoDB.

## Project structure

```
webvibe-fullstack/
├── frontend/     React + Vite + Tailwind CSS
└── backend/      Express + MongoDB (Mongoose)
```

## 1. Backend setup (Express + MongoDB)

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and set `MONGO_URI` to your database:
- **Local MongoDB:** `mongodb://127.0.0.1:27017/webvibe`
- **MongoDB Atlas (free tier):** create a cluster at mongodb.com/atlas, then copy the connection string it gives you into `MONGO_URI`.

Then start the server:

```bash
npm run dev      # auto-restarts on changes (nodemon)
# or
npm start        # plain node
```

The API runs at `http://localhost:5000`. You can check it's alive by opening that URL — it should return `{ "status": "ok" }`.

**Endpoints:**
| Method | Route          | Purpose                                  |
|--------|----------------|-------------------------------------------|
| POST   | `/api/contact` | Submit the contact form (used by the site) |
| GET    | `/api/contact` | List all submitted leads (for your own use) |

## 2. Frontend setup (React)

In a **second terminal**:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The site runs at `http://localhost:5173`. `.env` points it at the backend (`VITE_API_URL`) — leave it as `http://localhost:5000` for local dev.

## 3. Try it end to end

1. Backend running on port 5000, frontend on port 5173.
2. Open the site, scroll to the contact form, fill it in, and submit.
3. You should see a success message on the page, and a new document should appear in your `leads` collection in MongoDB (check it via MongoDB Compass, Atlas's web UI, or `mongosh`).

## 4. Deploying

- **Frontend:** `npm run build` inside `frontend/` produces a `dist/` folder — deploy it to Vercel, Netlify, or any static host. Set `VITE_API_URL` to your live backend URL as an environment variable at build time.
- **Backend:** deploy `backend/` to Render, Railway, or a VPS. Set `MONGO_URI` (your Atlas connection string) and `CLIENT_URL` (your live frontend URL, for CORS) as environment variables there.

## What's included / what's a placeholder

- All copy, pricing, portfolio projects, and testimonials are starter content — swap in your real project names, prices, and client quotes.
- The WhatsApp link (`wa.me/10000000000`) and "Book a call" link are placeholders — replace with your real number and booking link (e.g. Calendly).
- The newsletter signup form in the footer is UI-only; wire it to a provider (Mailchimp, ConvertKit, etc.) or a new backend route if you want it live.
