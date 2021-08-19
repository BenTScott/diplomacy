import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import * as Infrastructure from '../lib/hello-cdk-stack';

test('Stack has a bucket', () => {
    const app = new cdk.App();
    const stack = new Infrastructure.HelloCdkStack(app, 'MyTestStack');
    expect(stack).toHaveResource('AWS::S3::Bucket');
});
