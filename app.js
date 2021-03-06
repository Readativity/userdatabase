const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const queries = require("./queries");

app.use(cors());
app.use(bodyParser.json());

app.get("/users", (request, response) => {
  queries
    .list("userinformation")
    .then(profiles => {
      response.json({ profiles });
    })
    .catch(console.error);
});

app.get("/activity", (request, response) => {
  queries
    .list("activity")
    .then(activity => {
      response.json({ activity });
    })
    .catch(console.error);
});

app.get("/users/:id", (request, response) => {
  queries
    .read("userinformation", "id", request.params.id)
    .then(profile => {
      profile ? response.json({ profile }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/activity/:id", (request, response) => {
  queries
    .read("activity", "_userId", request.params.id)
    .then(activity => {
      activity ? response.json({ activity }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/users", (request, response) => {
  queries
    .create("userinformation", request.body)
    .then(users => {
      response.status(201).json({ users });
    })
    .catch(console.error);
});

app.post("/activity", (request, response) => {
  queries
    .create("activity", request.body)
    .then(activity => {
      response.status(201).json({ activity });
    })
    .catch(console.error);
});

app.put("/users/:id", (request, response) => {
  queries
    .update("userinformation", request.params.id, request.body)
    .then(profile => {
      response.json({ profile });
    })
    .catch(console.error);
});

app.put("/activity/:id", (request, response) => {
  queries
    .update("activity", request.params.id, request.body)
    .then(activity => {
      response.json({ activity });
    })
    .catch(console.error);
});

app.delete("/users/:id", (request, response) => {
  queries
    .delete("userinformation", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/users/:id", (request, response) => {
  queries
    .delete("activity", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.listen(process.env.PORT || 3000);
