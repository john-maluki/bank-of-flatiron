# Bank of Flatiron

`Bank of Flatiron` is an application built on React that displays a list of your recent bank transactions, among other features.

## Learning Goals

Implement a mini web app to practice on React:

- Components,
- Props,
- State,
- Events and data fetching

## Technologies Used

The following have been used on this project:

- HTML
- CSS
- JavaScript/React

## Project Setup & Pre-requisite Data

- In your project directory, create a `db.json` file and use the json data below for your server DB.

  ```json
  {
    "transactions": [
      {
        "id": 1,
        "date": "2019-12-01",
        "description": "Paycheck from Bob's Burgers",
        "category": "Income",
        "amount": 1000
      },
      {
        "id": 2,
        "date": "2019-12-01",
        "description": "South by Southwest Quinoa Bowl at Fresh & Co",
        "category": "Food",
        "amount": -10.55
      },
      {
        "id": 3,
        "date": "2019-12-02",
        "description": "South by Southwest Quinoa Bowl at Fresh & Co",
        "category": "Food",
        "amount": -10.55
      },
      {
        "id": 4,
        "date": "2019-12-04",
        "description": "Sunglasses, Urban Outfitters",
        "category": "Fashion",
        "amount": -24.99
      },
      {
        "id": 5,
        "date": "2019-12-06",
        "description": "Venmo, Alice Pays you for Burrito",
        "category": "Food",
        "amount": 8.75
      },
      {
        "id": 6,
        "date": "2019-12-06",
        "description": "Chipotle",
        "category": "Food",
        "amount": -17.59
      },
      {
        "id": 7,
        "date": "2019-12-07",
        "description": "Birthday Check from Grandma",
        "category": "Gift",
        "amount": 50
      },
      {
        "id": 8,
        "date": "2019-12-09",
        "description": "Lyft Ride",
        "category": "Transportation",
        "amount": -13.25
      },
      {
        "id": 9,
        "date": "2019-12-11",
        "description": "Paycheck from Bob's Burgers",
        "category": "Income",
        "amount": 1000
      },
      {
        "id": 10,
        "date": "2019-12-16",
        "description": "Tickets, Flatiron Multiplex Cinemas",
        "category": "Entertainment",
        "amount": -24
      },
      {
        "id": 11,
        "date": "2019-12-16",
        "description": "MTA Vending Machine: MetroCard",
        "category": "Transportation",
        "amount": -116.39
      },
      {
        "id": 12,
        "date": "2019-12-17",
        "description": "Venmo, Pay Roommate for Rent",
        "category": "Housing",
        "amount": -975
      },
      {
        "date": "2022-07-09",
        "description": "Office lunch",
        "category": "Food",
        "amount": "2000",
        "id": 13
      },
      {
        "date": "2022-07-09",
        "description": "Office lunch Wednesday",
        "category": "Food",
        "amount": "3000",
        "id": 14
      }
    ]
  }
  ```

- Run this command to get the backend started: `json-server --watch db.json`
- Test your server by visiting this route in the browser
  `http://localhost:8001/transactions`

## Core Deliverables

As a user, you need to be able to:

- See a table of all transactions
- Fill out and submit the form to add a new transaction. This should add the new transaction to the table
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

### Bonus Deliverables

As a user, I should be able to:

- Sort transactions alphabetically by category or description.
- Delete a transaction which will remove it from the table

## Authors

- [John Maluki](https://github.com/john-maluki)

## Copyright

Released under the MIT License. See the [LICENSE](https://github.com/john-maluki/bank-of-flatiron/blob/main/LICENSE) file.
