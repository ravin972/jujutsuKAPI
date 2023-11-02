import express from "express";
import { createUser, userPatch, userDelete, getUsers, getUser } from "../controllers/users.js";

const router = express.Router();

// all routes here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", userDelete);

router.patch("/:id", userPatch);

export default router;
