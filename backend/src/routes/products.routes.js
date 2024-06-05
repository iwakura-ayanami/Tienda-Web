import { Router } from "express";
import {getProducts, postProducts ,putProducts, deleteProducts, patchProducts} from "../controllers/products.controller.js";

const router = Router();

router.get ("/products",getProducts)

router.post ("/products", postProducts)

router.put ("/products", putProducts)

router.delete ("/products", deleteProducts)

router.patch ("/products", patchProducts)

export default router