import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DynamoClient, SqsClient } from "../config/Client";
import { Request, Response } from "express";
import { SendMessageCommand } from "@aws-sdk/client-sqs";

export async function criaTransactions(req: Request, res: Response) {
    const items = req.body;

    if (items) {
        items.forEach((item: any) => {
            SqsClient.send(new SendMessageCommand({
                QueueUrl: process.env.QUEUE_URL,
                MessageBody: JSON.stringify({
                    idempotencyId: item.idempotencyId,
                    amount: item.amount,
                    type: item.type
                })
            })).then((data) => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(500).json(error);
            });
        });
    } else {
        res.status(500).json({ message: "Items é vazio" });
    }
}

export async function getTables(req: Request, res: Response) {

    try {
        const data = await DynamoClient.send(new ListTablesCommand({}));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}