import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { SQSClient } from "@aws-sdk/client-sqs";

export const SqsClient = new SQSClient();
export const DynamoClient = new DynamoDBClient();