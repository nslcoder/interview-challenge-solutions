# Integer Count Server

This is a simple Express server that accepts an integer, stores the integer's request count in a JSON file and responds an object with a message and the number of times various integers have been requested.

## Request

```
{
  "integer": 10
}
```

## Response

```
{
    "message": "The number 10 has been requested 1 time(s)",
    "integerTracker": {
        "10": 1
    }
}
```

## Where the challenge is from

[Server Take Home by timschmidtdev](https://github.com/timschmidtdev/server_take_home)
