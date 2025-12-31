# Gmail Authentication Fix Guide

## Error: "Username and Password not accepted"

This error means Gmail is rejecting your credentials. Follow these steps to fix it:

## Step 1: Verify Your Gmail Account Has 2-Step Verification Enabled

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Under "Signing in to Google", check if **2-Step Verification** is ON
4. If it's OFF, turn it ON and follow the setup process

## Step 2: Generate a New App Password

1. Go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords

2. Select app: Choose **"Mail"**
3. Select device: Choose **"Other (Custom name)"** and type "Petrozin Website"
4. Click **Generate**

5. You'll get a 16-character password (like: `abcd efgh ijkl mnop`)
   - **Important**: Copy it exactly as shown, including spaces if any
   - You can only see this password once!

## Step 3: Update Your .env.local File

1. Open `.env.local` in your project root
2. Update these values:

```env
# Your actual Gmail address (the one with 2-Step Verification enabled)
EMAIL_USER=your-actual-email@gmail.com

# The 16-character App Password from Step 2 (remove spaces)
EMAIL_APP_PASSWORD=abcdefghijklmnop

# Where emails should be sent
EMAIL_RECIPIENT=info@petrozin.com
```

**Important Notes:**
- Use your **full Gmail address** (e.g., `john.doe@gmail.com`)
- For App Password: Remove all spaces if they exist (e.g., `abcd efgh ijkl mnop` → `abcdefghijklmnop`)
- Make sure there are no extra spaces or quotes around the values

## Step 4: Restart Your Development Server

After updating `.env.local`:

1. Stop your current server (Ctrl+C or Cmd+C)
2. Start it again:
   ```bash
   npm run dev
   ```

## Step 5: Test Again

Try submitting the contact form again. If you still get an error, check:

1. **Is 2-Step Verification enabled?** (Required for App Passwords)
2. **Is the App Password correct?** (Copy it exactly, no spaces)
3. **Is the Gmail address correct?** (Full email, not just username)
4. **Did you restart the server?** (Environment variables load on startup)

## Common Issues

### Issue: "Less secure app access" error
- **Solution**: You need 2-Step Verification + App Password. Regular passwords won't work.

### Issue: App Password doesn't work
- **Solution**: Generate a new one and make sure you copy it exactly (no spaces, no extra characters)

### Issue: Still getting authentication errors
- **Solution**: 
  1. Double-check your Gmail address in `.env.local`
  2. Generate a fresh App Password
  3. Make sure 2-Step Verification is enabled
  4. Restart your dev server

## Need Help?

If you're still having issues:
1. Check the server console for detailed error messages
2. Verify your `.env.local` file has the correct format (no quotes, no spaces)
3. Try generating a new App Password

