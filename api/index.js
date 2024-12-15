import express from "express"; // express: HTTP sunucusu oluşturmak için kullanılan popüler bir Node.js framework'ü
import cors from "cors";  // cors: CORS (Cross-Origin Resource Sharing) politikalarını yönetmek için kullanılır
import {Users} from './users.js' 
const app = express();

app.use(cors());  // CORS middleware'i ekleniyor (Diğer kaynaklardan gelen HTTP isteklerine izin vermek için)

// Ana GET endpoint
// URL: http://localhost:5000/
// İstemciden gelen sorguya göre kullanıcı verilerini filtreler ve döndürür

app.get("/", (req, res) => {    
    const { q } = req.query;   // Sorgu parametresinden "q" değerini alıyoruz

    const keys = ["first_name", "last_name", "email"]
    
    const search = (data) => {  // Verileri sorguya göre filtreleyen fonksiyon
    return data.filter(
    (item) => 
        keys.some((key) => item[key].toLowerCase().includes(q))  // Herhangi bir key q'yu içeriyor mu?
    );
    };

    res.json(search(Users).splice(0,10));

});

const PORT = 5000;
const URL = 'http://localhost:' + PORT

app.listen(PORT, () => console.log("API is working! " + URL));
