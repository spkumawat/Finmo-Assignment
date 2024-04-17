# NestJS Application

## Description

Welcome to the Forex Trading System backend engineering assignment! This project aims to develop a Forex Trading System using Nest.js. The objective is to implement various APIs enabling users to:

1. Top up their account
2. Fetch live FX conversion rates
3. Perform FX conversions
4. Check their account balances

By completing this assignment, you'll create a robust system for managing currency transactions and account balances.

## Features

1. **FX Rate Syncing Application**:
   - Fetches live FX conversion rates from alphavantage.co.
   - Stores rates in memory with a validity of 30 seconds.
   - Smart storage system maintains the most relevant FX rates.

2. **API Endpoints**:
   - **Top Up Account API**:
     - Endpoint: POST /accounts/topup
     - Allows users to add funds to their account in a specified currency.
   - **FX Rate API**:
     - Endpoint: GET /fx-rates
     - Fetches live FX conversion rates stored in memory from Step 1.
     - Generates a quoteId and sends it in the response.
   - **FX Conversion API**:
     - Endpoint: POST /fx-conversion
     - Performs FX conversion using the provided quoteId.
     - Converts a specified amount from one currency to another.
   - **Balance API**:
     - Endpoint: GET /accounts/balance
     - Retrieves the balances in all currencies for the user's account.

3. **Quote Management**:
   - Efficiently handles quote generation and expiration.
   - Ensures accurate and timely FX conversions based on provided quotes.

4. **Account Management**:
   - Tracks account balances across multiple currencies.
   - Enables users to top up their accounts and check balances seamlessly.

5. **Error Handling**:
   - Provides clear error messages and status codes for API requests.
   - Handles edge cases such as invalid input or expired quotes gracefully.

6. **Security**:
   - Implements secure communication protocols (HTTPS) for API endpoints.
   - Enforces authentication and authorization mechanisms to protect user data.

7. **Documentation**:
   - Provides comprehensive API documentation for easy integration and usage.
   - Includes examples and explanations of request and response formats.

8. **Testing**:
   - Implements unit tests to ensure the reliability and correctness of API endpoints.
   - Conducts integration tests to validate the system's behavior under various scenarios.



## Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- Node.js and npm (or yarn)


### Installation

1. Clone the repository:
git clone https://github.com/spkumawat/Finmo-Assignment.git



2. Install dependencies:
cd <project_folder>

npm install

### Running the Application

To start the application in development mode, run:
npm run start:dev



