# NewsApp

NewsApp is a web-based application that provides users with the latest news articles from various categories like Business, Sports, Health, and more. Built using React, it includes features like pagination, dynamic category navigation, and a responsive UI.

---

## Features

### Frontend:
- 📰 **Dynamic News Categories**: Users can browse news articles filtered by categories such as Business, Entertainment, Sports, Health, and Science.
- 🔄 **Pagination**: Efficiently navigate through multiple pages of articles.
- 🖼️ **News Cards**: Articles are displayed in a card layout with images, titles, and descriptions.
- 📊 **Loading Indicator**: A top-loading bar indicates the progress of API requests.
- 🌐 **Responsive Design**: Styled using Bootstrap for a modern and mobile-friendly interface.

### Backend:
- **API Integration**:
  - Fetches news articles dynamically from the **NewsAPI**.
  - Supports filtering by country, category, and pagination.
- **Environment Variable Support**:
  - API keys are securely managed using environment variables.

---

## Technologies Used

### Frontend:
- **React (via Create React App)**: For building the user interface.
- **React Router**: For seamless navigation between news categories.
- **Bootstrap**: For responsive styling and layout.
- **React Top Loading Bar**: For visual feedback on API request progress.

### Backend:
- **NewsAPI**: Integrated as an external API to fetch live news articles.

---

## React Hooks Used

1. **`useState`**:
   - Manages local state such as the list of articles, loading status, current page, and total results.
   - Example: Used in `News.js` to track articles and pagination.

2. **`useEffect`**:
   - Handles side effects like fetching news articles when the component mounts or the page/category changes.
   - Example: Used in `News.js` to call the `updateNews` function dynamically.

---

## Components

1. **`App.js`**:
   - The root component that handles routing and integrates the Navbar and News components.
   - Manages the progress state for the top-loading bar.

2. **`NavBar.js`**:
   - A responsive navigation bar with links to various news categories.

3. **`News.js`**:
   - The main component to display news articles.
   - Fetches articles from NewsAPI and supports pagination.

4. **`NewsItems.js`**:
   - Displays individual news articles in a card format with title, description, and image.

---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A valid API key from [NewsAPI](https://newsapi.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/froster02/newsapp.git
   cd newsapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the API key:
   - Create a `.env` file in the root directory.
   - Add your NewsAPI key:
     ```
     REACT_APP_NEWS_API=<your_api_key>
     ```

4. Start the development server:
   ```bash
   npm start
   ```

   Access the app at [http://localhost:3000](http://localhost:3000).

---

## Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

---

## API Endpoints

The application integrates with the **NewsAPI** using the following parameters:
- **Country**: Specifies the country for news articles (e.g., `us`, `in`).
- **Category**: Filters news articles by categories such as Business, Entertainment, Sports, etc.
- **Pagination**: Supports fetching articles in pages using `page` and `pageSize`.

---

## License

This project is currently not licensed. Add a license if needed.

---

## Contact

For questions or feedback, feel free to reach out:

- GitHub: [froster02](https://github.com/froster02)

---

Made with ❤️ by froster02.
