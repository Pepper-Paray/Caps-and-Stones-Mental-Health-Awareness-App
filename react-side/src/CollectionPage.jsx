import { useEffect, UseState } from "react";
import { getItems, addItem } from "./api";
import ItemForm from "./ItemForm";

export default function CollectionPage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItem();

    }, []);
   
    async function loadItems() {
        const data = await getItems();
        setItems(data);
    }
    async function handleAdd(newItem) {
        await addItem(newItem);
        loadItems()
    }

    return (
        <div>
            <
            ItemForm onAdd={handleAdd}/>
            <h2>Your Collection</h2>

            {items.map(item => (
                <div key={item.id} style={{ marginBottom:"15px" }}>
                    <strong>{item.name}</strong> ({item.type})
                    <div>Found at:{item.found_on}</div>
                    <div>Date: {item.found_on}</div>
                    <div>{item.notes}</div> 
                    {item.image_url && (
                    <img src={item.image_url} alt="" style={{ width: "150px" }}/>
                    )}
                </div>
            ))}
        </div>
    );
}