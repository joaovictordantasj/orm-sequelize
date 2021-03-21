const database = require('../models');

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    // READ todos os registros
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    // READ apenas um registro
    const { id } = req.params;

    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async criaPessoa(req, res) {
    // CREATE uma nova pessoa no banco
    const novaPessoa = req.body;

    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async atualizaPessoa(req, res) {
    // UPDATE um registro no banco
    const { id } = req.params;
    const novasInfos = req.body;

    try {
      await database.Pessoas.update(novasInfos, {
        where: {
          id: Number(id),
        },
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).send(pessoaAtualizada);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;
