import ReactGA from 'react-ga4';

// Initialize GA4 with your tracking ID
export const initGA = () => {
  // Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
  ReactGA.initialize('G-XXXXXXXXXX', {
    debug: process.env.NODE_ENV === 'development', // Enable debug mode in development
  });
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};

// Track specific portfolio interactions
export const trackPortfolioEvent = {
  // Track when users view different sections
  viewSection: (section: 'about' | 'resume' | 'projects' | 'skills') => {
    trackEvent('view_section', 'Portfolio', section);
  },
  
  // Track project interactions
  viewProject: (projectName: string) => {
    trackEvent('view_project', 'Projects', projectName);
  },
  
  clickProjectLink: (projectName: string, linkType: 'github' | 'live') => {
    trackEvent('click_project_link', 'Projects', `${projectName}_${linkType}`);
  },
  
  // Track resume views
  viewResume: () => {
    trackEvent('view_resume', 'Resume', 'pdf_modal');
  },
  
  // Track contact interactions
  clickContact: (method: string) => {
    trackEvent('click_contact', 'Contact', method);
  },
};