# NewsMonkey App 📰

**NewsMonkey** is a React-based news application that provides the latest news headlines from various categories like Business, Sports, Health, Technology, Science, and Entertainment. It uses the **NewsAPI.org** to fetch news data dynamically and implements infinite scrolling for a smooth user experience.

---

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

1. **Clone the repository:**

   git clone https://github.com/yourusername/NewsMonkey-App.git
   cd NewsMonkey-App

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

## License

This project is open-source and free to use under the MIT License.
