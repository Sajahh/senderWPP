import express, {Request, Response} from "express";
import { Sender } from "./sender";
const sender = new Sender();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/status", (req: Request, res: Response) => {
    if(sender.IsConnected) {
        res.status(200).send({Status: "Conectado"});
    } else {
        res.status(500).send({Status: "Desconectado"});
    }
});

app.get("/send", async (req: Request, res: Response) => {
    const {to, message} = req.body;
    
    try {    
      await sender.sendText(to, message);
      return res.status(200).json({message: "Mensagem enviada"});

    } catch (error) {
      console.log(error);
       return res.status(500).json({message: "Erro ao enviar mensagem"});
    }
});

app.listen(8000);