require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");

const indexRoutes = require("./routes/index");
const artisanRoutes = require("./routes/artisan");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/", indexRoutes);
app.use("/artisans", artisanRoutes);

// Exemple de route test
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend fonctionne !" });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à la base réussie.");
    app.listen(PORT, () => {
      console.log(`Serveur Express démarré sur le port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base :", err);
  });
