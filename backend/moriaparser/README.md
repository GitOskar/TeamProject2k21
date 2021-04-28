# Scholarship Revaluation

## Introduction

API return teacher list from moria API. Based on endpoint API returns filtered list. \
API is running on 9121 port.

## Documantation

### GET /it-institute

Get all teachers from IT institute

#### Example request (Gateway is running on port 8080)

```http
GET http://localhost:8080/moria-parser/it-institute
```
#### Example response

```
    ...
    {
        "degree": "dr",
        "department_id": 29,
        "first_name": "Michał",
        "id": 400,
        "last_name": "Chromiak"
    },
    {
        "degree": "dr",
        "department_id": 29,
        "first_name": "Rajmund",
        "id": 401,
        "last_name": "Kuduk"
    },
    {
        "degree": "dr",
        "department_id": 39,
        "first_name": "Piotr",
        "id": 443,
        "last_name": "Pikuta"
    },
    ...
```

### GET /no-it-institute

Returns list of no IT teachers.

#### Example request (Gateway is running on port 8080)

```http
GET http://localhost:8080/moria-parser/it-institute
```
#### Example response

```
   ...
   {
        "degree": "dr",
        "department_id": 232,
        "first_name": "Jolanta",
        "id": 21,
        "last_name": "Rodzoś"
    },
    {
        "degree": "dr hab.",
        "department_id": 80,
        "first_name": "Przemysław",
        "id": 31,
        "last_name": "Mroczek"
    },
    {
        "degree": "dr",
        "department_id": 73,
        "first_name": "Barbara",
        "id": 45,
        "last_name": "Trybulec"
    },
    ...
```

Get all teachers that are not from IT institute
