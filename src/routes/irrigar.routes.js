const express = require("express");
const router = express.Router();

const controller = require("../controllers/irrigarController");

router.get("/", controller.inicio);

router.get("/productos", controller.productos);

router.get("/nosotros", controller.nosotros);

router.get("/proyectos", controller.proyectos);

router.get("/contacto", controller.contacto);
router.post("/enviarMensaje", controller.enviarMensaje);

router.get("/ventas", controller.ventas);

module.exports = router;
