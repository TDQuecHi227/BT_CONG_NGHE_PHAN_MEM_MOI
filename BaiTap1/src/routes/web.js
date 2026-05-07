import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("TranDaoQuocHuy");
  });
  router.get("/home", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.getFindAllCrud);
  router.get("/edit-crud/:id", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud/:id", homeController.deleteCRUD);
  return app.use("/", router);
};

module.exports = initWebRoutes;
