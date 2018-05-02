// ROUTES

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

app.get("/addpet", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/addpet.html"));
})

app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

app.get("/api/pets", (req, res) => {
    return res.json(pets);
})