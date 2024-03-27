const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to registration page");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
