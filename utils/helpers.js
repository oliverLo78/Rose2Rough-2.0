module.exports = {
    format_time: (date) => {
      // format_time helper function to format a timestamp as HH:MM:SS
      return date.tolocaleTimeString();
    },
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear + 5
      }`;
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="red wine glass">🍷</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">🥂</span>`;
      } else {
        return `<span for="img" aria-label="gear">🍾</span>`;
      }
    },
  };