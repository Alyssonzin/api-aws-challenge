import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DynamoClient } from "../config/Client";
import { Request, Response } from "express";

export async function getTables(req: Request, res: Response) {

    try {
        const data = await DynamoClient.send(new ListTablesCommand({}));
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}