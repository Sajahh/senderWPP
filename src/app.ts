import express, {Request, Response} from "express";
import { Sender } from "./sender";
const sender = new Sender();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req: Request, res: Response) => {
    const name: string = req.body;
    return res.send(`Hello ${name}`);
   // res.status(200).json({message: `Hello ${name}`});
}
)
app.post("/send", async (req: Request, res: Response) => {
    const {to, message} = req.body;
    
    try {    
      await sender.sendText(to, message);
      return res.status(200).json({message: "Mensagem enviada"});

    } catch (error) {
       return res.status(500).json({message: "Erro ao enviar mensagem"});
    }
});


app.listen(8000);