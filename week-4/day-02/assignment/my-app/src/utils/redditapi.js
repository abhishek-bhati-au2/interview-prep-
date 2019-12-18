import snoowrap from "snoowrap";

export default new snoowrap({
  userAgent: "A-bhi",
  accessToken: process.env.REACT_APP_REDDIT_ACCESS_TOKEN
});
//token is valid for one hour only