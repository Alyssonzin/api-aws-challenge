import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DynamoClient, SqsClient } from "../config/Client";
import { Request, Response } from "express";
import { SendMessageCommand } from "@aws-sdk/client-sqs";

export async function criaTransactions(req: Request, res: Response) {
    SqsClient.send(new SendMessageCommand({
        QueueUrl: process.env.QUEUE_URL!,
        MessageBody: JSON.stringify(req.body)
    })).then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(500).json(error);
    });
}

export async function getTables(req: Request, res: Response) {

    try {
        const data = await DynamoClient.send(new ListTablesCommand({}));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}