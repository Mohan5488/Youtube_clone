

# Video Streaming App  

## Overview  
This project is a video streaming web application built with **React.js**. It features a sidebar for category-based navigation, a feed that displays videos, and a video player page with detailed statistics, channel information, and comments.  

## Features  

### 🏠 Home Page (`Home.jsx`)  
- Contains **SideBar** and **Feed** components.  
- Maintains a **category** state to track the selected category.  
- Passes both `category` and `setCategory` as props to `SideBar`.  

### 📌 SideBar (`SideBar.jsx`)  
- Displays shortcut links, each associated with a **category number**.  
- Clicking a link updates the category state using `setCategory`.  

### 📺 Feed (`Feed.jsx`)  
- Receives the **category** from `Home.jsx`.  
- Uses `useEffect` to fetch videos related to the selected category.  
- Displays the fetched videos in the feed section.  

### 🎬 Video Navigation  
- Clicking on any video image **redirects** to `/video/${d.snippet.categoryId}/${d.id}`.  
- Routes are defined in `App.js` as:  

  ```jsx
  <Route path='/video/:videoId/:id' element={<Video />} />
  ```

- Extracts `videoId` and `id` using `useParams()` in `Video.jsx`.  

### 📹 Video Page (`Video.jsx`)  
- Fetches **three types of data** when `videoId` changes:  
  1. **Video statistics** – Views, description, etc.  
  2. **Channel details** – Name, subscriber count, likes, shares, etc.  
  3. **Comments** – Usernames, profiles, date, and time.  
- Sends `videoId` and `id` as props to `PlayVideo.jsx`.  

### 🔁 Recommended Videos  
- Displays **related videos** based on `videoId`.  

## 🛠 Technologies Used  
- **React.js** (State Management: `useState`, Effects: `useEffect`)  
- **React Router** (`useParams()` for dynamic routing)  
- **API Integration** for fetching video, channel, and comment data  

## 📌 Setup Instructions  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Mohan5488/Youtube_clone.git
   cd Youtube_clone
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Start the development server:  
   ```bash
   npm start
   ```  

## 🚀 Future Improvements  
- **Search functionality** for videos.  
- **User authentication** for personalized recommendations.  
- **Dark mode toggle** for UI customization.  

---

This README provides a structured and clear guide to your project. Let me know if you’d like any modifications! 🚀
