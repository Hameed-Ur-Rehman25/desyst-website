// Email configuration for contact form
export const EMAIL_CONFIG = {
  // The email address where contact form submissions will be sent
  recipientEmail: "info@knevatech.com",
  
  // Formspree endpoint - Go to formspree.io, verify your email, get endpoint
  formspreeEndpoint: "https://formspree.io/f/xvgblnjl",
  
  // Optional: Additional email settings
  subject: "New Contact Form Submission - KnevaTech Website",
  
  // Form configuration
  form: {
    // Success message after form submission
    successMessage: "Thank you for your message! We'll get back to you within 24 hours.",
    
    // Error message if submission fails
    errorMessage: "Sorry, there was an error sending your message. Please try again or contact us directly.",
     
    // Required fields validation
    requiredFields: ["name", "email", "message"],
    
    // Email validation regex
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  }
};

// You can update the recipientEmail above to change where contact emails are sent
// Example: "contact@yourcompany.com" or "hello@yourdomain.com"
