import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;

export const url = pulumi.interpolate`http://localhost:3000`;

const config = new pulumi.Config();
// ...

const mongoUsername = config.require("mongo_username");
export const mongoPassword = config.requireSecret("mongo_password");
