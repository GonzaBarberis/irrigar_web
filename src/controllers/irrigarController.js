const { query } = require("express");

const controller = {};

controller.inicio = (req, res) => {
  res.render("index", { textoFino: "SISTEMAS DE RIEGO", textoGrueso: "POR GOTEO" });
};

controller.productos = (req, res) => {
  res.render("productos");
};

controller.nosotros = (req, res) => {
  res.send("nosotros");
};

controller.proyectos = (req, res) => {
  res.send("proyectos");
};

controller.contacto = (req, res) => {
  res.send("contacto");
};

controller.enviarMensaje = (req, res) => {
  res.send("prueba");
};

controller.ventas = (req, res) => {
  res.send("ventas");
};

module.exports = controller;
