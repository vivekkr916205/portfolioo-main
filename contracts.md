# Portfolio Website - API Contracts & Integration Guide

## Current Implementation Status
✅ **Frontend Complete** - Fully functional with mock data  
⏳ **Backend Ready** - Static portfolio (no backend needed currently)  
✅ **Contact Form** - Using mock implementation (ready for EmailJS integration)  
✅ **Resume Download** - Mock PDF download (replace with actual resume)

## Mock Data Structure

### Skills Data (located in `/app/frontend/src/data/mock.js`)
```javascript
skills: [
  {
    category: "Programming Languages",
    items: ["C++", "Java", "Python", "JavaScript"]
  },
  // ... other categories
]
```

### Projects Data
```javascript
projects: [
  {
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description for modal",
    technologies: ["Tech1", "Tech2"],
    features: ["Feature 1", "Feature 2"],
    status: "Completed" | "In Development",
    demoUrl: "URL or null"
  }
]
```

## Contact Form Integration

### Current Mock Implementation
- Form submission shows success toast
- Form resets after submission
- Loading state with spinner
- Client-side validation

### EmailJS Integration (Recommended)
**Required Environment Variables:**
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`  
- `REACT_APP_EMAILJS_USER_ID`

**Implementation Location:** `/app/frontend/src/components/Portfolio.jsx`
**Function:** `handleSubmit()`

### Alternative: Netlify Forms
Add `netlify` attribute to form element:
```html
<form netlify data-netlify="true" name="contact">
```

## Resume Download

### Current Implementation
- Mock PDF download with base64 content
- Success toast notification
- File naming: `Vivek_Kumar_Resume.pdf`

### Production Implementation
1. Add actual PDF to `/app/frontend/public/`
2. Update `handleDownloadResume()` function
3. Replace mock base64 with actual file path

## Design Specifications

### Color Scheme (Notion-inspired)
- **Background:** `#0D1117` (Dark black)
- **Text Primary:** `#F0F6FC` (Clean white)
- **Text Secondary:** `#8B949E` (Gray)
- **Cards:** `#161B22` with border `#21262D`
- **Hover States:** `#21262D` and `#30363D`

### Typography
- **Primary Font:** Inter (system fallback)
- **Weight Hierarchy:** 
  - Headers: 600-700 (semibold/bold)
  - Body: 400 (regular)
  - Secondary: 400 with gray color

### Component Usage
- **Buttons:** Shadcn UI components with custom Notion styling
- **Cards:** Custom styled with proper spacing and borders
- **Form Elements:** Dark theme inputs with focus states
- **Modal:** Custom implementation with backdrop blur

## File Structure
```
/app/frontend/src/
├── components/
│   ├── Portfolio.jsx          # Main portfolio component
│   └── ui/                    # Shadcn UI components
├── data/
│   └── mock.js               # Mock data (replace when adding CMS)
├── hooks/
│   └── use-toast.js          # Toast notifications
└── App.js                    # Main app with routing
```

## Future Enhancements (Phase 2)

### Content Management System
- Move from static data to dynamic content
- Admin panel for project/skill updates
- Blog section for technical articles

### Advanced Features
- Dark/light theme toggle
- Blog/articles section
- Project filtering and search
- Animation improvements
- SEO optimization

## Deployment Ready Features
✅ Static hosting compatible (Netlify, Vercel, GitHub Pages)  
✅ Mobile responsive design  
✅ Fast loading performance  
✅ Clean code structure  
✅ Professional design  
✅ Contact form ready for service integration  

## Integration Steps (When Needed)

1. **EmailJS Setup:**
   - Create account at emailjs.com
   - Get service ID, template ID, and user ID
   - Add to environment variables
   - Update handleSubmit function

2. **Resume Upload:**
   - Add PDF to public folder
   - Update download function
   - Test download functionality

3. **Analytics (Optional):**
   - Add Google Analytics
   - Track form submissions
   - Monitor user engagement

## Notes
- All mock data is clearly separated for easy replacement
- Design follows modern portfolio best practices
- Code is clean and well-commented
- Ready for immediate deployment as static site