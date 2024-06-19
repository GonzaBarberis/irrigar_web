const { query } = require("express");

const controller = {};

controller.inicio = (req, res) => {
  res.render("index", { textoFino: "SISTEMAS DE RIEGO", textoGrueso: "POR GOTEO", imagen: "/navbar/inicio.jpg" });
};

controller.productos = (req, res) => {
  res.render("productos");
};

controller.nosotros = (req, res) => {
  res.render("nosotros", { textoFino: "SOBRE", textoGrueso: "NOSOTROS", imagen: "/nosotros/nav.png" });
};

controller.proyectos = (req, res) => {
  res.render("proyectos", { textoFino: "TRABAJAMOS CON", textoGrueso: "TU CONFIANZA", imagen: "/proyectos/proban.png" });
};

controller.contacto = (req, res) => {
  res.render("contacto", { textoFino: "PROYECTAMOS", textoGrueso: "TUS IDEAS", imagen: "/contacto/banner.png" });
};

controller.enviarMensaje = (req, res) => {
  res.send("prueba");
};

controller.ventas = (req, res) => {
  res.send("ventas");
};

module.exports = controller;
