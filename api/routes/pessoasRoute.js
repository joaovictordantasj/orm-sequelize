const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// CRUD
router.get('/pessoas', PessoaController.pegaTodasAsPessoas); // READ
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa); // READ
router.post('/pessoas', PessoaController.criaPessoa); // CREATE
router.put('/pessoas/:id', PessoaController.atualizaPessoa); // UPDATE
router.delete('/pessoas/:id', PessoaController.apagaPessoa); // DELETE

router.get(
  '/pessoas/:estudanteId/matriculas/:matriculaId',
  PessoaController.pegaUmaMaticula
);

module.exports = router;
