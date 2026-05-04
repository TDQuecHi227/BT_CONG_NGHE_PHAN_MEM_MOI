import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node-fulltask", "root", "227985", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection Successfully");
  } catch {
    console.log("Unable to connect to Databaae");
  }
};

module.exports = connectDB;
