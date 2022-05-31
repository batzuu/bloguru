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
            "_id": "6296238894f43438c7ef167b",
            "title": "teaast1",
            "body": "exadamplebody",
            "author": "sasdome",
            "imglink": "somelink",
            "createdAt": "2022-05-31T14:17:44.662Z",
            "updatedAt": "2022-05-31T14:17:44.662Z",
            "__v": 0
        },
        {
            "_id": "629628714b05d4171c6c01b0",
            "title": "wow1",
            "body": "bodii",
            "author": "sme",
            "imglink": "imggur",
            "createdAt": "2022-05-31T14:38:41.077Z",
            "updatedAt": "2022-05-31T14:38:41.077Z",
            "__v": 0
        }
    ]

## Create a new Post

### Request

`POST /api/posts/`

### Request body

    {
        "title": "wow1",
        "body": "bodii",
        "author": "sme",
        "imglink": "imggur"
    }

### Response

    {
        "title": "wow1",
        "body": "bodii",
        "author": "sme",
        "imglink": "imggur",
        "\_id": "629628714b05d4171c6c01b0",
        "createdAt": "2022-05-31T14:38:41.077Z",
        "updatedAt": "2022-05-31T14:38:41.077Z",
        "\_\_v": 0
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
            "imglink": "somelink",
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
