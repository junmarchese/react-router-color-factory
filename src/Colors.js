import React from "react";
import { Link } from "react-router-dom";

function Colors ({ colors }) {
    return (
        <div className="colors-page">
            <div className="black-section">
                <h1>Welcome to the color factory.</h1>
                <Link className="add-color-link" to="/colors/new">Add a Color</Link>
            </div>
            <div className="white-section">
                <h2>Please select a color.</h2>
                <ul className="colors-list">
                    {colors.map((color) => (
                        <li key={color.name}>
                            <Link to={`/colors/${color.name}`} style={{ color: color.colorValue }}>{color.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Colors;