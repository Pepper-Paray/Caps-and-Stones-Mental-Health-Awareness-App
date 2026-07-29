import { useState } from "react"

export default function ItemForm({ onAdd }) {
    const [form, setForm] = useState({ onAdd }) {
        type : "rock",
        name : "",
        found_at : "",
        found_on : "",
        notes : "",
        image_url : ""
    });
    
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });

    }
    function handleSubmit(e) {
        e.preventDefault();
        onAdd(form);
        setForm({
            type: "rock",
            name: "",
            found_at: "",
            found_on: "",
            notes:"",
            image_url:""
        
        });
    }
    return (
        <form onSubmit={handleSubmit} style= {{ marginBottom: "20px" }}>
            
        </form>
    )
}