const express = require("express")
const router = express.Router()
const postControllers = require("../controllers/postControllers")

// Definiamo le rotte e associamo le funzioni del controller
router.get("/", postControllers.index); // GET /posts → Lista di tutti i post
router.get("/:id", postControllers.show); // GET /posts/:id → Un singolo post
router.post("/", postControllers.store); // POST /posts → Crea un nuovo post
router.put("/:id", postControllers.update); // PUT /posts/:id → Modifica completa
router.patch("/:id", postControllers.modify); // patch /posts/: → modifica parziale
router.delete("/:id", postControllers.destroy); // DELETE /posts/:id → Cancella un post

module.exports = router;