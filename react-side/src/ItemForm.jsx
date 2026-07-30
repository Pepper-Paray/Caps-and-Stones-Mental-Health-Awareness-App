import { useState } from "react";

export default function ItemForm({ onAdd }) {
    const [form, setForm] = useState({
        type: "rock",
        name: "",
        found_at: "",
        found_on: "",
        notes: "",
        image_url: ""
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
            notes: "",
            image_url: ""
        });
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            
            <label>
                Type:
                <select name="type" value={form.type} onChange={handleChange}>
                    <option value="rock">Rock</option>
                    <option value="mineral">Mineral</option>
                    <option value="fossil">Fossil</option>
                </select>
            </label>

            <br />

            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Found At:
                <input
                    type="text"
                    name="found_at"
                    value={form.found_at}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Found On:
                <input
                    type="date"
                    name="found_on"
                    value={form.found_on}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Notes:
                <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Image URL:
                <input
                    type="text"
                    name="image_url"
                    value={form.image_url}
                    onChange={handleChange}
                />
            </label>

            <br />

            <button type="submit">Add Item</button>
        </form>
    );
}
