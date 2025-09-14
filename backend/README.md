# Cafe Management System API Documentation
### Overview
This documentation provides details for integrating with the Cafe Management System API. The API allows frontend applications to manage stores, products, orders, and user authentication.

### Base URL: 
```bash
http://localhost:3000/api
```
---
## Table of Contents
- [Authentication](#Authentication)
- [User Endpoints](#user-endpoints)
- [Store Endpoints](#store-endpoints)
- [Product Endpoints](#product-endpoints)
- [Order Endpoints](#order-endpoints)

---
### Authentication
Most endpoints require Bearer Token authentication. Include the token in the Authorization header:
```bash
Authorization: Bearer <your_jwt_token>
```
Obtain a token through the login endpoint.

---

## User Endpoints
### User Registration
```bash
POST /user/auth/signup
```

### Description: 
- Create a new user account
- Authentication: None
- Request Body:

```json
{
  "name": "Admin User",
  "email": "admin@store.com",
  "address": "789 Admin Boulevard, Chicago, IL 60601",
  "password": "adminSecure789",
  "role": "ADMIN"
}
```
### User Login
```bash
POST /user/auth/login
```
### Description: 
- Authenticate user and receive JWT token
- Authentication: None

Request Body:

```json
{
  "email": "admin@store.com",
  "password": "admin1234"
}
```
Response: Includes JWT token for authenticated requests

### Get User Profile (Only for ADMIN)
```bash
GET /user
```
### Description: 
- Retrieve user information
- Authentication: Required (Bearer Token)

### Update User
```bash
PATCH /user/:userId
```
### Description:
- Update user information (Admin only)
- Authentication: Required (Bearer Token)
- Parameters: userId - User ID

Request Body:
```json
{
  "email": "newemail@gmail.com"
}
```
### Delete User
```bash
DELETE /user/:userId
```
Description: 
- Delete user account
- Authentication: None
- Parameters: userId - User ID

---

## Store Endpoints
### Get Store
```bash
GET /store
```
### Description: 
- Retrieve store information
- Authentication: None

### Create New Store (Only for ADMIN)
```bash
POST /store
```
### Description: 
- Add a new store
- Authentication: Required (Bearer Token)

Request Body:

```json
{
  "storeName": "JK cafe",
  "address": "Kolkata, Westbengal",
  "landmark": "Mandir",
  "contact": "+91 6546547986",
  "email": "jkonline@gmail.com"
}
```
### Update Store (Only for ADMIN)
```bash
PATCH /store/:storeId
```
### Description: 
- Update store information
- Authentication: Required (Bearer Token)
- Parameters: storeId - Store ID

Request Body:

```json
{
  "landmark": "Sahid minar"
}
```

---

## Product Endpoints
### Get All Products
```bash
GET /product
```
### Description: 
- Retrieve all products
- Authentication: None

### Create New Product (Only for ADMIN)
```bash
POST /product
```
### Description: 
- Add a new product
- Authentication: Required (Bearer Token)

Request Body:
```json
{
  "name": "Pizza2",
  "description": "Pizza description",
  "quantity": 15,
  "price": 500,
  "discount": 18,
  "category": "Pizza2"
}
```

### Update Product (Only for ADMIN)
```bash
PATCH /product/:ProductId
```
### Description: 
- Update product information
- Authentication: Required (Bearer Token)
- Parameters: ProductId - Product ID

Request Body:

```json
{
  "description": "Updated description"
}
```
### Delete Product (Only for ADMIN)
```bash
DELETE /product/:ProductId
```
### Description: 
- Remove a product
- Authentication: Required (Bearer Token)
- Parameters: ProductId - Product ID

---

## Order Endpoints
### Get All Orders (Only for ADMIN)
```bash
GET /order
```
### Description: 
- Retrieve all orders
- Authentication: Required (Bearer Token)

### Create New Order
```bash
POST /order
```
### Description: 
- Place a new order
- Authentication: Required (Bearer Token)

Request Body:

```json
{
  "userId": "user123",
  "quantity": 1,
  "amount": 15.99,
  "paymentMethod": "cash_on_delivery",
}
```
### Update Order
```bash
PATCH /order/:orderId
```

### Description: 
- Update order information
- Authentication: Required (Bearer Token)
- Parameters: orderId - Order ID

Request Body:

```json
{
  "quantity": 3
}
```
### Delete Order (Only for ADMIN)
```bash
DELETE /order/:orderId
```
### Description: 
- Cancel/delete an order (Admin only)
- Authentication: Required (Bearer Token)
- Parameters: orderId - Order ID

---