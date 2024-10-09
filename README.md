# PEMS Digital Frontend Dev Hiring Assignment

**Developer:** Joel P Jacob  
**Role:** Front End Developer  
**Project:** Technical Evaluation for PEMS Digital

---

## Task Overview:

The objective of this assignment is to create a simple mobile app using **React Native** that fetches user data and posts from the **JSONPlaceholder API** and displays them in a user-friendly manner. This task evaluates your skills in working with APIs, handling asynchronous data, implementing infinite scrolling, and creating a responsive user interface.

---

## Features Implemented:

1. **Home Screen (Users List):**
   - Fetches and displays a list of users.
   - Each user card shows details such as the user's name, email, phone, and website.
   - Infinite scrolling is implemented to show 5 users at a time and load more as the user scrolls.
   - A button allows navigation to the User Posts screen for each user.

2. **User Posts Screen:**
   - Displays the selected user's name, email, phone, and website at the top.
   - Fetches and shows the posts of the selected user (5 posts at a time) with titles and bodies.
   - Implemented infinite scrolling for loading more posts as the user scrolls.

3. **Error Handling:**
   - A loading state is displayed while the data is being fetched.
   - Handled 500 internal server errors and displayed an appropriate error message to the user.

4. **Styling and Responsiveness:**
   - The app is responsive, ensuring a clean and usable layout across different screen sizes and devices.
   - Simple, user-friendly design with a clean layout and easy navigation.

---

## Technologies Used:

- **React Native**: For building the mobile app.
- **React Navigation**: For handling navigation between screens.
- **Axios**: For making API requests.
---

**Usage Instructions:**
-----------------------

1.  **Clone the Repository:**

    -   Run the following command to clone the repository:

    `git clone https://github.com/JoelPJacob/PEMSTechAssign.git`

2.  **Install Dependencies:**

    -   Navigate to the project directory and install the required dependencies:

    `cd PEMSTechAssign
    
    npm install`

3.  **Run the Project:**

    -   For Android:

        bash

        `npm run-android`

4.  **APK Testing:**

    -   You can also download and install the APK file to test the app on an Android device.

* * * * *

**Challenges Encountered and Solutions:**
-----------------------------------------

1.  **Infinite Scrolling Implementation:**

    -   Challenge: Managing the API requests efficiently while ensuring smooth scrolling and rendering.
    -   Solution: I used React Native's `FlatList` component, which supports lazy loading and efficient rendering of large lists. The `onEndReached` event was used to trigger fetching more data when the user scrolls to the bottom of the list.

* * * * *

**Future Improvements:**
------------------------

1.  **Enhanced Error Handling:**

    -   Adding more detailed error handling for other HTTP statuses (e.g., 404, 403) and adding retry functionality for failed API requests.
2.  **Caching and Optimization:**

    -   Implement caching to reduce API calls and enhance performance, especially when the app is used frequently.
3.  **User Authentication:**

    -   Implement user authentication to allow users to log in and view their personalized data.
4.  **UI Enhancements:**

    -   Improve the user interface with better design elements such as avatars for users, post images, and a more polished overall look.
5.  **Search and Filter Functionality:**

    -   Add search functionality to filter users or posts by keywords.

* * * * *

**Contact Information:**
------------------------

-   **Email**: joelpjacob@gmail.com
-   **GitHub**: <https://github.com/JoelPJacob>
-   **LinkedIn**: <https://linkedin.com/in/joel-p-jacob>