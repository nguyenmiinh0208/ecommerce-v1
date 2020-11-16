const router = require("express").Router();
const ProductModel = require("./product.controller");
const { productRule } = require("./product.validate");
const validate = require("@middlewares/validate");
const auth = require("@middlewares/jwt");

router.get("/get-price-for-products", ProductModel.getPriceForProducts);
router.get("/get-product-of-category/:slug", ProductModel.getProductOfCategory);
router.get("/", ProductModel.getAllProduct);
router.get("/:slug", ProductModel.getProductBySlug);

router.put("/:slug", validate(productRule), ProductModel.updateProduct);
router.delete("/:slug", ProductModel.deleteProduct);

module.exports = router;
