# WILDCARS

Projet de Cédric, Yann et Geoffrey pour le Hackathon de la wild code school/AWS de janvier 2023

## **Cars**

### Get all cars

Get: /api/cars

### Get one car

Get: /api/cars/:id

### Post car

Post: /api/cars

### Update car

Put : /api/cars/id
ex =>

```json
{
    "champsAModifier": "nouvelle valeur"
}
```

## **Users**

### Get all users

Get : /api/users

### Get one user

Get : /api/users/id

### Update user

Put : /api/users/id
ex =>

```json
{
    "champsAModifier": "nouvelle valeur"
}
```

## **Booking**

### Get all booking

Get: /api/booking

### Get One reservation

Get: /api/booking/id

### Post new booking

Post : /api/booking
ex =>

```json
{
    "users_id": "0749f599a3f469823366d9e7b7d69604",
    "car_id": "16ca5d24-0eae-48c6-aafb-98918ec201a6",
    "fin": "2023-01-13T14:45:38+00:00",
    "debut": "2023-01-12T14:45:38+00:00"
}
```
