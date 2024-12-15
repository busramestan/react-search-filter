## **Dynamic User Search 🚀**

**Dynamic User Search** is a simple web application that allows users to search through a list of users. It integrates an API built with Express.js that filters and retrieves user data based on search queries.

### **💻 Technologies Used**
- **Frontend**: React
- **Backend**: Node.js (Express)
- **API**: Fetches user data and filters based on search queries
- **CORS**: To enable cross-origin resource sharing between frontend and backend

---

### **✨ Features**
- Search users by their **first name**, **last name**, or **email**.
- Display a list of users based on search results.
- Fetch data dynamically using API calls.

--- 

## ⚙️ **Setup & Installation** 🛠️

### ⬇️ Steps

1. **Clone the repository**:


```bash
   git clone https://github.com/busramestan/react-search-filter.git
   cd react-search-filter
```

2. **Install dependencies for both frontend and backend:**
- **For Frontend** 
```bash
cd client
npm install
```

- **For Backend:**
```bash
cd api
npm install
```

3. **Start the backend server:**

```bash
cd api
node index.js
```

The backend API will run on `http://localhost:5000`

4. **Start the frontend application**

```bash
cd client
npm start
```

The frontend will be available on `http://localhost:3000`

---

### ⚡ Usage
- Open your browser and navigate to `http://localhost:3000`
- Enter a search query in the search bar to filter users based on their **first name**, **last name**, or **email**.
- The results will be displayed dynamically as you type.

### 📝 API Documentation
- **GET** `/`
  - **Query Parameter**: `q` (search term)
  - **Description**: Filters the users by **first name**, **last name**, or **email**.
  - **Example Request**: `http://localhost:5000?q=john`
  - **Response**: A list of users whose names or emails match the query.
