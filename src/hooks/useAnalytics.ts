import ReactGA from "react-ga4";

const TRACKING_ID = "G-QLEEZETYK4"; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(TRACKING_ID);
  }
};

export const trackPageView = (path: string) => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.event(action, params);
  }
};

export const trackScroll = (scroll_depth: number) => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.event("scroll", {
      scroll_depth,
    });
  }
};
