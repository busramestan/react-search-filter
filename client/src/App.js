
//           --------- API SEARCH --------

import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import axios from "axios";

function App() {
  // Arama sorgusunu tutan state
  const [query, setQuery] = useState("");

  // API'den dönen verileri tutan state
  const [data, setData] = useState([]);

  // Hata mesajlarını tutan state
  const [error, setError] = useState(null);

  //useEffect ile query'ye göre API'den veri çekiliyor
  useEffect(() => {
    const fectUsers = async () => {
      try {
        // API'den veri çekme işlemi
        const res = await axios.get(`http://localhost:5000?q=${query}`);
        
        setData(res.data);
      } catch (err) {
        // Hata durumunda state güncelleniyor
        setError("Error fetching data!");
        console.error(err);
      }
    };
    if(query.length === 0 || query.length >= 2) fectUsers();
  }, [query]);

  return (
    <div className="app">
      {/* Kullanıcının arama yapabilmesi için bir input alanı */}
      <input
        type="text"
        placeholder="Search.."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Eğer bir hata oluşursa, kullanıcıya hata mesajı gösterilir */}
      {error && <p>{error}</p>}

      {/* API'den gelen verileri tablo bileşenine gönderip ekranda gösteriyoruz */}
      <Table data={data} />
    </div>
  );
}

export default App;


//               ------BASİC SEARCH -------- 

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//       ----- SEARCH ON A DATATABLE -------

// function App() {
//     const [query, setQuery] = useState("");
    
//     const keys = ["first_name", "last_name", "email"]
    
//     const search = (data) => {
//     return data.filter(
//     (item) => 
//         keys.some((key) => item[key].toLowerCase().includes(query))
//     )
//     }

//     return (
//     <div className="app">
//     <input 
//         type="text" 
//         placeholder="Search.." 
//         className="search" 
//         onChange={(e) => setQuery(e.target.value)}
//     />
//     <Table data={search(Users)} />
//     </div>
//     );
// }
