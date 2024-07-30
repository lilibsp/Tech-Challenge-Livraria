import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import Livro from "./models/livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json());


  app.get("/", (req, res) => {
    res.status(200).send("Livraria - Tech Challenge");
  });

  app.get("/livros", async (req, res) => {
    try {
      const listaLivros = await Livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  });

  app.get("/livros/:id", async (req, res) => {
    try {
      const livro = await Livro.findById(req.params.id);
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).send("Livro não encontrado");
      }
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  });
  
  app.post("/livros", async (req, res) => {
    try {
      const novoLivro = new Livro(req.body);
      await novoLivro.save();
      res.status(201).send("Livro cadastrado com sucesso");
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  });
  
  app.put("/livros/:id", async (req, res) => {
    try {
      const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (livroAtualizado) {
        res.status(200).json(livroAtualizado);
      } else {
        res.status(404).send("Livro não encontrado");
      }
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  });
  
  app.delete("/livros/:id", async (req, res) => {
    try {
      const livroRemovido = await Livro.findByIdAndDelete(req.params.id);
      if (livroRemovido) {
        res.status(200).send("Livro removido com sucesso");
      } else {
        res.status(404).send("Livro não encontrado");
      }
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  });
    
  export default app;
