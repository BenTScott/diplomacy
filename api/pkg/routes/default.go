// +build default

package routes

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
)

func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch req.HTTPMethod {
	case "GET":
		return Get(ctx, req)
	case "POST":
		return Post(ctx, req)
	case "PUT":
		return Put(ctx, req)
	case "DELETE":
		return Delete(ctx, req)
	default:
		return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
	}
}

func Get(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}

func Post(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}

func Put(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}

func Delete(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
}
