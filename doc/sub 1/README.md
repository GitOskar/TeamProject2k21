# Warehouse/Store REST API

## Introduction

The user (customer) can view the list of products and can make purchases if the cash on his account allows it. \
Customer is not include in example API. \
For database diagram go to /doc/img

## Example API documentation

### POST /warehouseapi/product
Add a new product to warehouse system
#### Example request:
```json
{
    "name": "Apple",
    "price": 2.0
}
```
#### Example response:
```json
{
    "id": 2,
    "name": "Apple",
    "price": 2.0
}
```
Http status 200: Successful operation \
Http status 405: Validation excaption
### PUT /warehouseapi/product
Update existing product in system
#### Example request:
```json 
{
    "id": 1,
    "name": "Banana",
    "price": 3.0
}
```
Http status 200: Successful operation \
Http status 404: Product not found \
Http status 405: Validation excaption
### GET /warehouseapi/product/all
Returns all product
#### Example response:
```json
[
    {
        "id": 1,
        "name": "Banana",
        "price": 3.00
    },
    {
        "id": 2,
        "name": "Apple",
        "price": 2.00
    },
    {
        "id": 3,
        "name": "mango",
        "price": 3.00
    }
]
```
Http status 200: Successful operation
### POST /warehouse/order
Creates a new order \
Body contains all ordered products
#### Example request:
```json
[
    {"productId": 3, "quantity": 21},
    {"productId": 1, "quantity": 3}
]
```
#### Example response:
```json
{
    "id": 1,
    "orderDate": "2021-03-15 15:30:00",
    "totalPrice": 722.0
}
```
Http status 200: Successful operation \
Http status 404: One or more products not found \
Http status 405: Validation exception
### GET /warehouse/order/recalculate_order
Convert the order according to the given identifier to the current prices
#### Example request:
1
#### Example response:
```json
{
    "id": 1,
    "orderDate": "2021-03-15 15:30:00",
    "totalPrice": 718.0
}
```
### GET /warehouse/order/orders_in_period_of_time
Return orders by the given period of time
#### Example request:
```json
{
    "from": "2021-03-15T15:00:00",
    "to": "2021-03-15T16:00:00"
}
```
#### Example response:
```json
[
    {
        "id": 2,
        "orderDate": "2021-03-15 15:30:00",
        "totalPrice": 122222.0
    }
]
```
Http status 200: Successful operation \
Http status 404: One or more products not found \
Http status 405: Validation exception