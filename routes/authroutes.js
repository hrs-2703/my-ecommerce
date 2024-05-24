import  express from "express";
import  { registercontroller,logincontroller,testcontroller,forgotpasswordcontroller, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController }from "../controllers/authcontroller.js";
import { requireSignIn,isAdmin } from "../middlewares/authmiddleware.js";

const router = express.Router()

router.post('/register',registercontroller)

router.post('/login',logincontroller)

router.post('/forget-password',forgotpasswordcontroller)
router.get('/test',requireSignIn, testcontroller)

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

  router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

  router.put("/profile", requireSignIn, updateProfileController);

  //orders
router.get("/orders", requireSignIn, getOrdersController);

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router
