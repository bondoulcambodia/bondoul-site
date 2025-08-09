import ReactGA from "react-ga4";

const TRACKING_ID = "G-1V949EEKK4"; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      cookieDomain: "none",
      // cookieDomain: "auto",
      // cookieFlags: "SameSite=None;Secure",
    },
  });
};

export const trackPageView = (path: string) => {
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
