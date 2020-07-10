// function for scroll to top of the screen
const scrollToTop = scrollRef => {
  scrollRef.current.scrollTo({
    y: 0,
    animated: true
  });
};

export default scrollToTop;
