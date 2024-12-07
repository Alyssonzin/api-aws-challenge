import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DynamoClient } from "../config/Client";
import { Request, Response } from "express";

export async function getTables(req: Request, res: Response) {
    res.send('Hello World');
    // try {
    //     const data = await DynamoClient.send(new ListTablesCommand({}));
    //     return res.status(200).json(data.TableNames);
    // } catch (error) {
    //     return res.status(500).json(error);
    // }
}