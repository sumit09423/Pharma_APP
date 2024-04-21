# Pharma Product Portal

## Overview
Pharma Product Portal is a mobile application designed to streamline the interface between pharmacy owners and doctors. It allows pharmacy owners to manage their inventory and facilitates doctors in browsing and ordering pharmaceutical products.

## Features

### Pharmacy Owners:
- **Product Management**: Add, update, and delete pharmaceutical products.
- **Order Tracking**: View and manage orders from doctors, including order status updates.

### Doctors:
- **Browse Inventory**: View a list of available pharmaceutical products.
- **Place Orders**: Order pharmaceutical products directly through the app.

## Technical Stack
- **Frontend**: React Native
- **Backend**: Node.js with Express
- **Database**: MySQL

## Getting Started

### Prerequisites
- Install Node.js from [Node.js official website](https://nodejs.org/).
- Set up a MySQL database.
- Install Android Studio or Xcode for mobile development.

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/pharma-product-portal.git
```
cd pharma-product-portal

Setup Backend
Install backend dependencies:
```
cd backend
npm install
```

makefile
```
DB_HOST=localhost
DB_USER=yourusername
DB_PASS=yourpassword
DB_NAME=pharmacydb
```

Run the database migrations:

```
npm run migrate
```

Start the backend server:

npm start

##Setup Frontend

Install frontend dependencies:

```
cd ../frontend
npm install
```

Start the React Native application:

For Android:
```
npx react-native run-android
```

For iOS:
```
npx react-native run-ios
```

Usage
Use the app as a doctor to browse and order products, or as a pharmacy owner to manage inventory and orders. Ensure the backend is running to handle requests from the mobile frontend.

Contributing
Contributions are welcome. To contribute:

Fork the project.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for more details.
