# Email Setup Instructions

## Configuration Steps

1. **Update `.env.local` file** with your email credentials:
   - Open `.env.local` in the root directory
   - Replace `your-email@gmail.com` with your actual Gmail address
   - Replace `abcdefghijklmnop` with your Google App Password (remove spaces)
   - The password you provided is: `abcd efgh ijkl mnop` → use `abcdefghijklmnop` (no spaces)

2. **Your `.env.local` should look like this:**
   ```
   EMAIL_USER=your-actual-email@gmail.com
   EMAIL_APP_PASSWORD=abcdefghijklmnop
   EMAIL_RECIPIENT=info@petrozin.com
   ```

3. **Restart your development server** after updating the `.env.local` file:
   ```bash
   npm run dev
   ```

## How It Works

- **Contact Form**: Submissions are sent via email to `info@petrozin.com`
- **Vendor Registration Form**: Submissions are sent via email to `info@petrozin.com`
- Both forms now use the API endpoints instead of mailto links
- Emails are sent using your Gmail account with the App Password

## Important Notes

- The `.env.local` file is already in `.gitignore` - your credentials won't be committed to git
- Make sure 2-Step Verification is enabled on your Google account
- The App Password should be 16 characters (remove spaces from the one you provided)
- If emails aren't sending, check:
  1. Your Gmail address is correct
  2. App Password is correct (no spaces)
  3. 2-Step Verification is enabled
  4. Server has been restarted after updating `.env.local`

## Testing

After setup, test both forms:
1. Go to `/contact` and submit the contact form
2. Go to `/vendor-registration` and submit the vendor registration form
3. Check the `info@petrozin.com` inbox for the submissions

