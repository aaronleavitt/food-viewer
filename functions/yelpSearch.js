const axois = require("axios");

exports.handler = async (events) => {
  const term = events.queryStringParameters.term || "greek";
  const location = events.queryStringParameters.location || "90701";

  console.log("> Term: ", term);
  console.log(">> Location: ", location);

  const response = await axois({
    method: "get",
    url: "https://api.yelp.com/v3/businesses/search",
    params: {
      term: term,
      location: location,
      limit: 50,
    },
    headers: {
      Authorization:
        "Bearer VBKLWtzb81luXk2xw7x0nPG799WOM1ZxcCZlTTsarxS2GOsTAJ10if1ghlpGmDZWckugJZLVJD8MvAi230oIXIuYK54NgMPHS8rmkqKcLacGCYfd0aEx0H68Gt24YnYx",
    },
  });

  const data = response.data;

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
