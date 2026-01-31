# MongoDB Atlas Setup for Contact Form

This guide explains how to set up MongoDB Atlas for the portfolio contact form and dashboard.

## 1. Create a MongoDB Atlas Account

1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. Sign up (free) or log in

## 2. Create a Cluster

1. Click **Build a Database**
2. Choose **M0 Free** tier
3. Select a cloud provider and region (e.g. AWS, closest to you)
4. Name your cluster (e.g. `portfolio`)
5. Click **Create**

## 3. Create a Database User

1. In **Database Access** → **Add New Database User**
2. Choose **Password** authentication
3. Set a username and strong password (save them!)
4. Give role **Read and write to any database**
5. Click **Add User**

## 4. Allow Network Access

1. In **Network Access** → **Add IP Address**
2. For development: click **Allow Access from Anywhere** (0.0.0.0/0)
3. For production: add only your Vercel/server IPs
4. Click **Confirm**

## 5. Get Your Connection String

1. Go to **Database** → **Connect** on your cluster
2. Choose **Connect your application**
3. Copy the connection string, e.g.:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<username>` and `<password>` with your database user
5. Add a database name: `?retryWrites=...` → `portfolio?retryWrites=...`

## 6. Create .env.local

Create `portfolio/.env.local`:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority

DASHBOARD_SECRET=your-secure-password-for-dashboard
```

- **MONGODB_URI**: Your full connection string
- **DASHBOARD_SECRET**: A password to access `/dashboard` (choose something strong)

## 7. MongoDB Will Create the Collection Automatically

When the first contact is submitted, Mongoose will automatically create the `contacts` collection and `Contact` model. No manual table creation needed.

## 8. Test

1. Run `npm run dev`
2. Submit a message via the contact form
3. Visit `/dashboard` and enter your `DASHBOARD_SECRET` password
4. You should see your contact

## Deploying (Vercel)

1. In your Vercel project → **Settings** → **Environment Variables**
2. Add `MONGODB_URI` and `DASHBOARD_SECRET`
3. Redeploy your project

## Security Notes

- Never commit `.env.local` to Git (it's in `.gitignore`)
- Use a strong `DASHBOARD_SECRET` — anyone who knows it can view contacts
- For production, restrict MongoDB Network Access to Vercel IPs or use Vercel's env vars
