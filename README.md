This project was created using [Create React App](https://github.com/facebook/create-react-app).

# Exchange rates app

This app uses a [Foreign exchange rates API](https://exchangeratesapi.io/) free service for current and historical foreign exchange rates.

:rocket: [View Demo](https://uxmoon-react-exchange-rates.netlify.app/)

## Requirements

- [NodeJs](https://nodejs.org/en/)

## Installation

Clone this repository and run the following commands:

- `npm install` install to dependencies.
- `npm start` runs the app in [http://localhost:3000](http://localhost:3000).
- `npm run build` to generate app build.

## Usage

- The user can select a currency from the dropdown and select a date previous to
the current date.
- After the use selection the app will fetch the information from the API.
- By default 4 currencies are displayed: USD, CAD, GBP and EUR.
- The secondary button will display all additional rates and currencies available.

## Components

**App.js**

- Use *componentDidMount* to fetch latest rates data using Axios and using USD as currency base.
- Display *Form* and *Rates* child components

**Form.js**

- Generate dropdown options currency key property name and matching them to a currency name.
- Use *Material-UI Picker* for Datepicker component and disable future dates, format date and set locale language.
- On submit update *base* and *date* state on parent component.

**Rates.js**

- Generate a default currency table for *USD*, *CAD*, *GBP* and *EUR* currencies.
- Generate currency table for all additional currencies and rates.

**Button.js**

- Create a button component to display where needed like *Form* and *Rates* component.

## Resources

- **Datepicker**: [Material-UI Pickers](https://material-ui-pickers.dev/) and [day.js](https://day.js.org/)
- **Flags** are from [CountryFlags.io](https://www.countryflags.io/)