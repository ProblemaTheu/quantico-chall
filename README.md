# Developer Notes (please read)

Hi guys!!

Besides the README notes about the react application, i wanna make sure i explain everthing i did in this challenge

To run it you will need to:

- run npm start to compile the react app in localhost:3000
- run python main.py (or run/start debugging in VSCode) to compile the python code in localhost:8080

I've made a simple form that allows you to select a set from the game "Magic: The Gathering" and enter the number of cards you want as an answer.

This form will make a request to our python application and return the rarity of the open cards.

The API I used was "https://magicthegathering.io". I decided to use this API because in the challenge you ask that the application on the back end be "time-consuming and computationally intensive" and as computing is a fast response area, a request to this API usually takes 3 to 4 seconds, and for the server that loads the API, it's a relatively heavy task. (tbh it was the most time-consuming and computationally intensive API i could think in this range of 2 days, but i know how things can be heavier and longer if we're working with tons of data)

in App.tsx l53 and l54 I put limits on the number of cards in the request (minimum: 20 and maximum: 2000) just as a way of making sure the response isn't immediate (and to avoid bad requests to the server), but feel free to change these parameters and make requests for 2 or 50000 cards.

If I've misunderstood anything about the task or how you expect it to be, please let me know.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
