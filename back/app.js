const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/user", async (req, res) => {
  try {
    const accessToken = req.query.accessToken;

    // Get user data
    const userDataResponse = await axios.get("https://graph.facebook.com/me", {
      params: {
        fields: "id,name,email,picture",
        access_token: accessToken,
      },
    });
    const userData = userDataResponse.data;

    // Get user pages
    const userPagesResponse = await axios.get(
      "https://graph.facebook.com/me/accounts",
      {
        params: {
          fields: "id,name",
          access_token: accessToken,
        },
      }
    );
    const userPages = userPagesResponse.data;

    res.send({ userData, userPages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running "));
