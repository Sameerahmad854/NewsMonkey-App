# NewsMonkey App 📰

**NewsMonkey** is a React-based news application that provides the latest news headlines from various categories like Business, Sports, Health, Technology, Science, and Entertainment. It uses the **NewsAPI.org** to fetch news data dynamically and implements infinite scrolling for a smooth user experience.

## Features ✨

1). **Category-based News:** Browse news by categories: General, Business, Entertainment, Health, Science, Sports, Technology.
2). **Infinite Scroll:** Scroll down to load more news automatically.
3). **React Function Components:** Fully built using React functional components with hooks (`useState`, `useEffect`, `useCallback`).
4). **Loading Spinner:** Shows a spinner while fetching news.
5). **Fallback Images:** Handles missing news images with a placeholder.
6). **Dynamic Page Titles:** Updates document title according to the selected news category.
7). **Environment Variables:** API key is stored in `.env` for security.
8). **Responsive UI:** Built with Bootstrap 5 for mobile-friendly design.
9). **Favicon & App Icon:** Supports custom favicon and Apple touch icon.

## Installation ⚡

## Install dependencies:

npm install

## Setup environment variable:

1). Create a .env file in the root directory and add your NewsAPI.org API key:
**REACT_APP_NEWS_API=your_api_key_here**

## Start the development server:

npm start

## Access in browser:

Open http://localhost:3000

## Usage

1).Navigate using the navbar to switch between categories.
2).Scroll down to automatically load more news using infinite scroll.
3).If an article doesn't have an image, a placeholder image is displayed.
4).Page title dynamically updates with the selected category.

## Dependencies

1)React (v18+)
2)React Router DOM (v6)
3)React Infinite Scroll Component
4)Bootstrap 5
5)PropTypes
6)React Top Loading Bar (Optional for progress bar)

# NewsMonkey 📰

A React-based news application that fetches top headlines from [NewsAPI](https://newsapi.org/) and displays them with infinite scroll.

## Notes / Tips 💡

1. **API Rate Limits:** NewsAPI free tier allows limited requests. Exceeding the limit will return **429 Too Many Requests**.
2. **Placeholder Images:** If `via.placeholder.com` fails due to DNS or network issues, fallback images won't display.
3. **CORS:** Ensure your API key works for local development.
4. **Environment Variables:** Always use `REACT_APP_` prefix for React to pick up `.env` variables. Example:  
   REACT_APP_NEWS_API=your_api_key_here

Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
