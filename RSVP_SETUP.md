# RSVP Form Setup Guide

This guide will help you set up the Formspree integration for the RSVP form.

## Formspree Setup

1. **Create a Formspree Account**
   - Go to [Formspree.io](https://formspree.io) and create an account
   - Create a new form for your RSVP

2. **Configure Form Fields**
   - Add the following fields to your Formspree form:
     - `name` (text)
     - `rsvp` (select: "Will Attend", "Cannot Attend")
     - `dietary_restrictions` (text)
     - `message` (textarea)
     - `has_plus_one` (checkbox)
     - `plus_one_name` (text)
     - `plus_one_dietary_restrictions` (text)

3. **Get Your Form Endpoint**
   - Copy the form submission URL from Formspree
   - Replace `YOUR_FORMSPREE_ENDPOINT` in `src/RSVP.tsx` with your actual endpoint


## Testing

1. **Test Formspree Integration**
   - Fill out the RSVP form on your website
   - Check that the data appears in your Formspree dashboard
   - You can view all submissions in your Formspree dashboard

## Security Considerations

- Formspree includes built-in spam protection
- You can enable CAPTCHA in your Formspree form settings
- Formspree provides rate limiting to prevent abuse

## Troubleshooting

- Check the browser console for any JavaScript errors
- Verify that your Formspree endpoint is correct
- Test with a simple form submission first

## Customization

You can customize the form fields by:
1. Modifying the form fields in `src/RSVP.tsx`
2. Updating the Formspree form configuration