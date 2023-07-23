const MAIN_API_URL = "http://localhost:3001";
// const MAIN_API_URL = "https://api-flatiron-recent-transactions.onrender.com";

const sortTransanctionsByDate = (transactions) => {
  return transactions.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });
};

export { MAIN_API_URL, sortTransanctionsByDate };
