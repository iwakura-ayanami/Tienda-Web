import { Router } from "express";
import {getCategories, postCategories ,putCategories, deleteCategories, patchCategories} from "../controllers/categories.controller.js";

const router = Router();

router.get ("/categories", getCategories )

router.post ("/categories", postCategories)

router.put ("/categories", putCategories)

router.delete ("/categories", deleteCategories)

router.patch ("/categories", patchCategories)    

export default router