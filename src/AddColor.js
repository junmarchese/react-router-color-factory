import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddColor({ addColor }) {
    const [colorName, setColorName] = useState("");
    const [colorValue, setColorValue] = useState("#ffffff");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(colorName, colorValue);
        navigate("/colors");
    };

    return (
        <div className="add-color"> 
            <h1>Add a New Color</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="color-name">Color name:</label>
                    <input
                        type="text"
                        id="color-name"
                        value={colorName}
                        placeholder="Enter name of color"
                        onChange={(e) => setColorName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="color-value">Color value:</label>
                    <input
                        type="color"
                        id="color-value"
                        value={colorValue}
                        onChange={(e) => setColorValue(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add this color</button>
            </form>
        </div>
    );
}

export default AddColor;