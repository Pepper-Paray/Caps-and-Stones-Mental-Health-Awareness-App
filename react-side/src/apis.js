const API_URL = "https://your-backend-url.com";

export async function getItem() {
    const res = await fetch('${API_URL}/items');
    return res.json ();
}

export async function addItem(item) {
    const res = await fetch ('${API_URL}/items' , {
     method: "POST", 
     headers: {"Content-Type": "application/json" },
     body: JSON.stringify(item)
});
return res.json();
}