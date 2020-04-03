export const timeOfDayGreeting = () => {
  const currHours = new Date().getHours();
  if (currHours < 12) return 'Good Morning';
  else if (currHours < 18) return 'Good Afternoon';
  else return 'Good Evening';
};
