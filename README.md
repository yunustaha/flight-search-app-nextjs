## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Photos

![image](https://github.com/yunustaha/flight-search-app-nextjs/assets/48367134/0569c8b5-9240-4648-b384-8672331cac35)

![image](https://github.com/yunustaha/flight-search-app-nextjs/assets/48367134/d72fef1a-119e-4055-a1f2-992ce9de3aff)

![image](https://github.com/yunustaha/flight-search-app-nextjs/assets/48367134/7e2ab5c0-447b-494c-aeb4-09e11c887aa8)

![image](https://github.com/yunustaha/flight-search-app-nextjs/assets/48367134/59336743-34cd-43fb-ab3e-af8a97bbea89)

![image](https://github.com/yunustaha/flight-search-app-nextjs/assets/48367134/ee4e8d60-e3a6-4d3f-a36a-234517058fea)

## Data

{
  "airports": [
    {
      "value": "IST",
      "label": "Istanbul Atatürk Airport",
      "city": "Istanbul",
      "country": "Turkey"
    },
    {
      "value": "JFK",
      "label": "John F. Kennedy International Airport",
      "city": "New York",
      "country": "United States"
    },
    {
      "value": "LHR",
      "label": "London Heathrow Airport",
      "city": "London",
      "country": "United Kingdom"
    },
    {
      "value": "DXB",
      "label": "Dubai International Airport",
      "city": "Dubai",
      "country": "United Arab Emirates"
    },
    {
      "value": "LAX",
      "label": "Los Angeles International Airport",
      "city": "Los Angeles",
      "country": "United States"
    },
    {
      "value": "HND",
      "label": "Tokyo Haneda Airport",
      "city": "Tokyo",
      "country": "Japan"
    }
  ],
  "airlines": [
    {
      "code": "TK",
      "name": "Turkish Airlines"
    },
    {
      "code": "EK",
      "name": "Emirates"
    },
    {
      "code": "BA",
      "name": "British Airways"
    },
    {
      "code": "DL",
      "name": "Delta Airlines"
    }
  ],
  "flights": [
    {
      "id": "FL123",
      "airline": "TK",
      "departure": "IST",
      "destination": "JFK",
      "departure_time": "2023-08-16",
      "arrival_time": "2023-08-16",
      "price": 550.00,
      "available_seats": 120
    },
    {
      "id": "FL456",
      "airline": "EK",
      "departure": "DXB",
      "destination": "LHR",
      "departure_time": "2023-08-16",
      "arrival_time": "2023-08-16",
      "price": 620.00,
      "available_seats": 90
    },
    {
      "id": "FL789",
      "airline": "DL",
      "departure": "LAX",
      "destination": "HND",
      "departure_time": "2023-08-17",
      "arrival_time": "2023-08-18",
      "price": 780.00,
      "available_seats": 150
    },
    {
      "id": "FL101",
      "airline": "BA",
      "departure": "LHR",
      "destination": "IST",
      "departure_time": "2023-08-18",
      "arrival_time": "2023-08-18",
      "price": 600.00,
      "available_seats": 100
    },
    {
      "id": "FL202",
      "airline": "EK",
      "departure": "DXB",
      "destination": "JFK",
      "departure_time": "2023-08-19",
      "arrival_time": "2023-08-19",
      "price": 700.00,
      "available_seats": 80
    },
    {
      "id": "FL303",
      "airline": "BA",
      "departure": "LHR",
      "destination": "JFK",
      "departure_time": "2023-08-20",
      "arrival_time": "2023-08-20",
      "price": 610.00,
      "available_seats": 110
    },
    {
      "id": "FL404",
      "airline": "DL",
      "departure": "JFK",
      "destination": "LAX",
      "departure_time": "2023-08-21",
      "arrival_time": "2023-08-21",
      "price": 680.00,
      "available_seats": 130
    },
    {
      "id": "FL505",
      "airline": "EK",
      "departure": "DXB",
      "destination": "HND",
      "departure_time": "2023-08-22",
      "arrival_time": "2023-08-22",
      "price": 720.00,
      "available_seats": 95
    },
    {
      "id": "FL606",
      "airline": "TK",
      "departure": "IST",
      "destination": "LHR",
      "departure_time": "2023-08-23",
      "arrival_time": "2023-08-23",
      "price": 560.00,
      "available_seats": 140
    },
    {
      "id": "FL707",
      "airline": "TK",
      "departure": "IST",
      "destination": "HND",
      "departure_time": "2023-08-24",
      "arrival_time": "2023-08-24",
      "price": 580.00,
      "available_seats": 130
    },
    {
      "id": "FL808",
      "airline": "DL",
      "departure": "LAX",
      "destination": "LHR",
      "departure_time": "2023-08-25",
      "arrival_time": "2023-08-25",
      "price": 700.00,
      "available_seats": 120
    },
    {
      "id": "FL909",
      "airline": "EK",
      "departure": "DXB",
      "destination": "JFK",
      "departure_time": "2023-08-26",
      "arrival_time": "2023-08-26",
      "price": 630.00,
      "available_seats": 100
    },
    {
      "id": "FL1010",
      "airline": "BA",
      "departure": "LHR",
      "destination": "IST",
      "departure_time": "2023-08-27",
      "arrival_time": "2023-08-27",
      "price": 590.00,
      "available_seats": 110
    },
    {
      "id": "FL1111",
      "airline": "TK",
      "departure": "IST",
      "destination": "LAX",
      "departure_time": "2023-08-28",
      "arrival_time": "2023-08-28",
      "price": 670.00,
      "available_seats": 150
    },
    {
      "id": "FL1212",
      "airline": "EK",
      "departure": "DXB",
      "destination": "HND",
      "departure_time": "2023-08-29",
      "arrival_time": "2023-08-29",
      "price": 710.00,
      "available_seats": 90
    },
    {
      "id": "FL1313",
      "airline": "DL",
      "departure": "JFK",
      "destination": "LHR",
      "departure_time": "2023-08-30",
      "arrival_time": "2023-08-30",
      "price": 600.00,
      "available_seats": 140
    },
    {
      "id": "FL1414",
      "airline": "BA",
      "departure": "LHR",
      "destination": "DXB",
      "departure_time": "2023-08-31",
      "arrival_time": "2023-08-31",
      "price": 680.00,
      "available_seats": 120
    },
    {
      "id": "FL1515",
      "airline": "EK",
      "departure": "DXB",
      "destination": "LAX",
      "departure_time": "2023-09-01",
      "arrival_time": "2023-09-01",
      "price": 700.00,
      "available_seats": 130
    },
    {
      "id": "FL1616",
      "airline": "TK",
      "departure": "IST",
      "destination": "HND",
      "departure_time": "2023-09-02",
      "arrival_time": "2023-09-02",
      "price": 590.00,
      "available_seats": 110
    },
    {
      "id": "FL1717",
      "airline": "BA",
      "departure": "JFK",
      "destination": "LAX",
      "departure_time": "2023-09-03",
      "arrival_time": "2023-09-03",
      "price": 720.00,
      "available_seats": 90
    },
    {
      "id": "FL1818",
      "airline": "DL",
      "departure": "LAX",
      "destination": "HND",
      "departure_time": "2023-09-04",
      "arrival_time": "2023-09-04",
      "price": 750.00,
      "available_seats": 120
    },
    {
      "id": "FL1919",
      "airline": "EK",
      "departure": "DXB",
      "destination": "LHR",
      "departure_time": "2023-09-05",
      "arrival_time": "2023-09-05",
      "price": 630.00,
      "available_seats": 110
    },
    {
      "id": "FL2020",
      "airline": "TK",
      "departure": "IST",
      "destination": "JFK",
      "departure_time": "2023-09-06",
      "arrival_time": "2023-09-06",
      "price": 580.00,
      "available_seats": 130
    }
  ]
}



