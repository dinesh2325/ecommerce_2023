import express from "express";
import JWT from "jsonwebtoken";
import {
  bulkorderStatusController,
  forgotPasswordController,
  getAllOrdersController,
  getAllbulkOrdersController,
  getOrdersController,
  getallUserController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

//routing
//register
router.post("/register", registerController);

//forget password
router.post("/forgot-password", forgotPasswordController);

//login
router.post("/login", loginController);

//test
router.get("/test", requireSignIn, isAdmin, testController);

//forget password
router.post("/forgot-password", forgotPasswordController);

//user protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//admin protected route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//bulk orders
router.get("/bulk-orders", requireSignIn, getAllbulkOrdersController);
router.put(
  "/bulkorder-status/:orderId",
  requireSignIn,
  isAdmin,
  bulkorderStatusController
);
// order status update

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

router.get("/all-users", getallUserController);

export default router;
