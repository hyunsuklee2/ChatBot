const express = require("express");
const cors = require("cors");
const {default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "8e0cef35-ab2c-4a84-9131-2885b28d2318" }}
    );
    return res.status(r.status).json(r.data);
    
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
    
  }
});
 
//27e44235-493c-4d9d-8072-72b0189f5f0d  porject id

app.listen(3001);