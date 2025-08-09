import ReactGA from "react-ga4";

const TRACKING_ID = "G-1V949EEKK4"; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  console.log("Initializing Google Analytics with ID:", TRACKING_ID);
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (path: string) => {
  console.log(`Tracking page view for: ${path}`);
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (action: string, params?: Record<string, any>) => {
  ReactGA.event(action, params);
};

export const trackScroll = (scroll_depth: number) => {
  ReactGA.event("scroll", {
    scroll_depth,
  });
};
