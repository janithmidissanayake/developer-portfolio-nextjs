# 📧 EmailJS Setup Guide

Follow these steps to enable the contact form email functionality.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (it's free!)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the connection wizard
5. **Copy the Service ID** (looks like: `service_abc1234`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template:

**Subject:**
```
New Contact from {{user_name}}
```

**Content:**
```
You have received a new message from your portfolio contact form:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Click **Save**
5. **Copy the Template ID** (looks like: `template_xyz5678`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Scroll to **API Keys** section
3. **Copy your Public Key** (looks like: `kfg5jH7gk3jKl9Pqw`)

## Step 5: Create .env.local File

1. In your project root (where `package.json` is), create a file named `.env.local`
2. Add these lines with YOUR actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=kfg5jH7gk3jKl9Pqw
```

**IMPORTANT:** Replace the example values with your actual credentials!

## Step 6: Restart Dev Server

```bash
# Stop the server (Ctrl+C or Cmd+C)
# Then restart:
npm run dev
```

## Step 7: Test the Contact Form

1. Fill out the contact form on your website
2. Click **Send**
3. Check the browser console (F12) for messages:
   - ✅ "Email sent successfully!" = Working!
   - ❌ "EmailJS not configured" = Check your .env.local file
   - ❌ "Email send failed" = Check your EmailJS credentials

4. Check your email inbox for the message!

## Troubleshooting

### "EmailJS not configured" Error
- Make sure `.env.local` file exists in project root
- Check that all three variables are set correctly
- Restart the dev server after creating/editing `.env.local`

### "Email send failed" Error
- Verify your EmailJS Service ID is correct
- Verify your Template ID is correct
- Verify your Public Key is correct
- Make sure your EmailJS service is connected (check EmailJS dashboard)
- Check if you've exceeded EmailJS free tier limit (200 emails/month)

### Email Template Variables
Your EmailJS template MUST include these variables:
- `{{user_name}}` - The sender's name
- `{{user_email}}` - The sender's email
- `{{message}}` - The message content

### Still Not Working?
1. Open browser console (F12)
2. Try to send a message
3. Look for error messages
4. Share the console errors for more help

## Free Tier Limits
- 200 emails per month
- Upgrade to paid plan for more emails

## Security Note
The `.env.local` file is ignored by git and won't be committed to your repository.
This keeps your EmailJS credentials private and secure.




