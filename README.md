# Budget Distribution and Expense Management Web Application

## Overview

This project is a web application designed to facilitate the visualization and management of personal expenses. It provides a platform similar to Excel for managing tables, where users can create and save distributions of their income, track their expenses, and analyze their spending habits with the help of AI.

## Features

### Distribution Management
- **Income Distribution:** Users can allocate percentages of their salary to different categories such as Tithing, Investment, Education, Savings, Wants, and General Expenses.
- **Saving and Retrieving Distributions:** Users can save their customized distribution settings and retrieve them later for further adjustments or analysis.

### Expense Tracking
- **Monthly Expenses:** A component lists all the monthly expenses.
- **Add New Expense:** A form for adding new expenses to the list.

### Analysis Page
- **AI-Powered Analysis:** The application includes an AI module that analyzes the expenses against the saved income distribution limits and provides insights and recommendations.

## Technologies Used

- **React:** For building the user interface.
- **JavaScript:** For adding interactivity to the web application.
- **SQLite:** For storing user data, distributions, and expenses.
- **CSS:** For styling the application.
- **HTML:** For structuring the web pages.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/luizmottam/project-budget-menager
   cd project-budget-menager
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Database:**
   Ensure SQLite is installed and set up the database:
   ```bash
   sqlite3 database.db < schema.sql
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Distribute Income:**
   - Navigate to the distribution page.
   - Enter your salary and allocate percentages to different categories.
   - Save your distribution settings.

2. **Track Expenses:**
   - Go to the expenses page.
   - View the list of monthly expenses.
   - Use the form to add new expenses.

3. **Analyze Spending:**
   - Visit the analysis page.
   - Review the AI-generated analysis of your expenses compared to your income distribution.

## File Structure

- `/src`: Contains the source code of the application.
  - `/components`: Reusable React components.
  - `/pages`: Main pages of the application (Distribution, Expenses, Analysis).
  - `/services`: Services for data handling and API calls.
  - `/styles`: CSS files for styling components and pages.
  - `/utils`: Utility functions and helper methods.

## Contributing

We welcome contributions to the project. If you would like to contribute, please fork the repository and create a pull request with your changes. Make sure to follow the code style and add appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

This README provides a comprehensive overview of the project, its features, technologies used, and instructions for installation, setup, and usage. It also outlines the project's file structure, contributing guidelines, and license information.