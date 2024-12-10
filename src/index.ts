import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import transactionRouter from './routes/transactions';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT!;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api', transactionRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});