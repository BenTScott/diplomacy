package main

import (
	"diplomacy-api/pkg/routes"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(routes.Handler)
}
