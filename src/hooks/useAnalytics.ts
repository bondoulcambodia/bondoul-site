import ReactGA from "react-ga4";

const TRACKING_ID = "G-1V949EEKK4"; // Replace with your Google Analytics tracking ID

export const initGA = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const isDebugMode = urlParams.get("ga_debug") === "true";

  if (isDebugMode) {
    console.log("GA DebugView has been enabled via URL parameter.");
  }

  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      cookieDomain: "none",
    },
    gtagOptions: {
      debug_mode: isDebugMode,
    },
  });
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page_path: path,
    page_location: window.location.href,
  });
};

export const trackEvent = (action: string, params?: Record<string, any>) => {
  ReactGA.event(action, params);
};

export const trackScroll = (scroll_depth: number) => {
  ReactGA.event("scroll", {
    scroll_depth,
  });
};
