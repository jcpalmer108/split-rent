# SplitRent

## About SplitRent

SplitRent is an easy-to-use web form that gathers apartment details from the user, and generates an understandable rent calculation for what they can expect each of their roommates to pay.

The algorithm works by gathering all bedroom and bathroom areas (squarefootage), and dividing that squarefootage by the total cost of rent. This cost-per-squarefoot number is then used to determine how much a certain room in the space will cost. If a roommate shares that sapce (ie shares a room), the cost of that space is divided between the number of people in the space.

This means that at the end of the calculation, users who live alone in a room with an attached bathroom will pay more than individuals sharing a room or sharing a bathroom.

## Inspiration Behind the Project

The idea behind SplitRent came about one day when I was browsing Facebook marketplace and saw someone searching for a roommate. This individual listed the apartment complex and rent they were hoping to live in, and wrote out how much they expected their potential new roommates to pay.

It came as a shock to me when I opened the apartment complex website and saw that the Original Poster was trying to make their potential new roommates pay for 85% of rent, when the Original poster was planning on living in the master bedroom with the attached bath.

I believed this would be a perfect use case to practice developing my functional React component skills, in hopes of providing a quick and easy-to-use calculator for individuals looking for how to evenly split rent based on the bedroom sizes and square footage.

## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
