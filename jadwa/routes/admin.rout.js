import { Router } from "express";
import express from "express";
import fileUpload from "express-fileupload";
const app = express();
const router = Router();
import bodyParser from 'body-parser';
app.use(fileUpload());
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router);
import AdminController from "../controller/Admin_controller.js";
const admin=new AdminController();

import {
  display_all_users,
  deleteUser,
  handleAdminSignup,
  toAdmin,
  toClient,
  edituser,
  editinguser,
} from "../controller/adminusercontrol.js";

import {AddCarPackage,get_car_to_edit,editCarPackage,deleteCarPackages,
  AddLifePackage,get_Life_to_edit,editLifePackage,deleteLifePackages,
  AddMedicalPackage,get_Med_to_edit,editMedicalPackage,deleteMedicalPackages,getAllPackages} from "../controller/adminpackagecontrol.js";







// router.use((req, res, next) => {
//   if (req.session.user !== undefined && req.session.user.role === "A") {
//     next();
//     console.log(req.session.user.role);
//   } else {
//     res.render("pages/err", {
//       err: "You are not an Admin",
//       user: req.session.user === undefined ? "" : req.session.user,
//     });
//   }
// });

router.get("/", (req, res) => {
  res.render("pages/admin", {
    user: req.session.user === undefined ? "" : req.session.user,
  });
});


///////////////////////////////user/////////////////////////////////////

router.get("/adduser", (req, res) => {
  res.render("pages/adduser", {
    user: req.session.user === undefined ? "" : req.session.user,
  });
});

router.get("/view&edituser", (req, res) =>{
  admin.Get_Users(req,res);
});


router.delete("/delete/:id",(req, res) =>{
  admin.user_delete(req,res);
});
router.get("/toAdmin/:id", (req, res) =>{
  admin.user_to_admin(req,res);
});
router.get("/toClient/:id", (req, res) =>{
  admin.user_to_client(req,res);
});
router.get("/edituser/:id", (req, res) =>{
  admin.Get_user(req,res);
});
router.post("/editinguser/:id", (req, res) =>{
  admin.edit_user(req,res);
});

router.post("/adduser", (req, res) =>{
  admin.add_user(req,res);
});
// router.get('/view&edituser',isAdmin,GET);




//////////////////////////////////packages////////////////////////////////////
//getall packages
router.get("/view&editPackages",getAllPackages);

export default router;
