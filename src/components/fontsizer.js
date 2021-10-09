const fontsizer = (windowWidth) => {
  if (windowWidth > 400) {
    return 18;
  } else if (windowWidth > 250) {
    return 16;
  } else {
    return 12;
  }
};

export default fontsizer;
