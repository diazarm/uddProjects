import { useState, useEffect } from "react"
import { dataBase } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
 
function Menu() {
 
    const [menu, setMenu] = useState([]);
 
    useEffect(() => {
        const getMenu = async () => {
            try {
                const collectionRef = collection(dataBase, Menu);
                const response = await getDocs(collectionRef);
                const docs = response.docs.map((doc) => {
                    const data = doc.data()
                    return data
                })
                setMenu(docs)
            } catch (error) {
                console.log("Esto es un error", error)
 
            }
        }
        getMenu()
 
    }, [])
    console.log(menu)
 
    return (
        <div>Menu</div>
    )
}
 
 
export default Menu


//tiempo del 2:50 Anto
