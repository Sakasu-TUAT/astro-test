function customScrollReveal(selector, options) {
  const defaultOptions = {
      reset: true,
      distance: "60px",
      duration: 2000,
      delay: 200,
      origin: "bottom"
  };

  const mergedOptions = { ...defaultOptions, ...options };

  ScrollReveal(mergedOptions).reveal(selector);
}

export {customScrollReveal};

