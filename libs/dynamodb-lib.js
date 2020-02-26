import { DynamoDB as ddb } from 'aws-sdk';

export function call(action, params) {
  const ddbClient = new ddb.DocumentClient();
  return ddbClient[action](params).promise();
}
