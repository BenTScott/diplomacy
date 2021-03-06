// +build users

package routes

import (
	"context"
	"fmt"

	users "diplomacy-api/pkg/routes/users"

	"github.com/aws/aws-lambda-go/events"
)

func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch req.HTTPMethod {
	case "GET":
		return users.GetUsers(ctx, req)
	case "POST":
		return users.PostUsers(ctx, req)
	case "PUT":
		return users.PutUsers(ctx, req)
	case "DELETE":
		return users.DeleteUsers(ctx, req)
	default:
		return events.APIGatewayProxyResponse{StatusCode: 500}, fmt.Errorf("Unhandled method - %v", req.HTTPMethod)
	}
}
