import express from "express";
import characterRoute from "./Routes/Character.Route.js"
import villageRoute from "./Routes/Village.Route.js"
import missionRoute from "./Routes/mission.Route.js"

const app = express();
app.use(express.json());

app.use(characterRoute)
app.use(villageRoute)
app.use(missionRoute)

app.listen(4000, () => {
    console.log("Server running in port: 4000")
});