import express, {Request, Response} from "express";
import Sender from "./sender";

const sender = new Sender();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "Hello World"});
}
)
app.post("/send", async (req: Request, res: Response) => {
    const {to, body} = req.body;
    
    try {    
      await sender.sendText(to, body);
        res.status(200).json({message: "Mensagem enviada"});

    } catch (error) {
        res.status(500).json({message: "Erro ao enviar mensagem"});
    }
});


app.listen(3000);