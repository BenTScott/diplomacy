package users

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
)

func GetUsers(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}

func PostUsers(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}

func PutUsers(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}

func DeleteUsers(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}
