// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7ek6lqaid9scvnmu5ib3qalff4",     // CognitoClientID
  "api_base_url": "https://x6zzs1675f.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-emily-serverless-arc.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d12h0ed8gzqli.amplifyapp.com"                                      // AmplifyURL
};

export default config;
