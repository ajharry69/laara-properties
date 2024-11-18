# Laara Properties

**Live Demo**: [laara-properties-test.web.app](https://laara-properties-test.web.app/)

This app provides a property listing site built using **[React](https://react.dev/)** and **[Vite](https://vite.dev/)**.
It is hosted on **[Firebase](https://firebase.google.com/)**.

## Requirements

Install [Node.js](https://nodejs.org/en/download/package-manager) (version 18.x to 22.x).

## Setup & Installation

1. Install Dependencies:

   ```shell
   npm ci
   ```

2. Start Development Server:

   ```shell
   npm run dev
   ```

## Directory Structure

```
laara-properties/
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── PropertyDetails
│   │   │   ├── PropertyDetails.jsx
│   │   │   └── propertydetails.module.css
│   │   └── PropertyList
│   │       ├── PropertyList.jsx
│   │       └── propertylist.module.css
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── PropertiesPage.jsx
│   └── services
│       └── api.jsx
└── vite.config.js
```

## Firebase Hosting

To deploy to firebase, please follow the instructions in [here](https://vite.dev/guide/static-deploy#google-firebase).
