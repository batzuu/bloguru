# Bloguru API documentation

This is a basic and bare-bones documentation for the REST api provided by the
backend of this application.

The entire backend-application is contained within the `server` directory.

> The readme is not complete, in the procces of adding all the endpoints

## Install

    npm install

## Run the app (Dev)

    npm run dev

# REST API

The REST API is described below. Postman or cURL is recommended for testing.

## Server health check

### Request

`GET /api/healthcheck/`

### Response

    OK

## Get list of Posts

### Request

`GET /api/posts/`

### Response

    [
        {
            "_id": "628e746081c36c2adbb237ea",
            "title": "123",
            "body": "body123",
            "author": "abc",
            "createdAt": "2022-05-25T18:24:32.269Z",
            "updatedAt": "2022-05-25T18:24:32.269Z",
            "__v": 0
        },
        {
            "_id": "628e759d81c36c2adbb237ec",
            "title": "test1",
            "body": "examplebody",
            "author": "some",
            "createdAt": "2022-05-25T18:29:49.469Z",
            "updatedAt": "2022-05-25T18:29:49.469Z",
            "__v": 0
        }
    ]

## Create a new Post

### Request

`POST /api/posts/`

### Request body

    {
        "title": "123",
        "body": "body123",
        "author": "abc"
    }

### Response

    {
        "postRes": {
            "title": "123",
            "body": "body123",
            "author": "abc",
            "_id": "628e746081c36c2adbb237ea",
            "createdAt": "2022-05-25T18:24:32.269Z",
            "updatedAt": "2022-05-25T18:24:32.269Z",
            "__v": 0
        }
    }

## Get a specific Post

### Request

`GET /api/post/id`

### Response

    [
        {
            "_id": "628e746081c36c2adbb237ea",
            "title": "123",
            "body": "body123",
            "author": "abc",
            "createdAt": "2022-05-25T18:24:32.269Z",
            "updatedAt": "2022-05-25T18:24:32.269Z",
            "__v": 0
        }
    ]

## Get a non-existent Post

### Request

`GET /api/post/id`

### Response

    {
        "status": 404,
        "message": "Error in fetching post. Check id if supplied"
    }
