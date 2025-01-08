import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function ColorDetails({ colors }) {
    const { color } = useParams();

    const selectedColor = colors.find(c => c.name === color);

    if (!selectedColor) {
        return <Navigate to="/colors" />
    }

    return (
        <div className="color-page" style={{ backgroundColor: selectedColor.colorValue }}>
            <div className="color-info">
                <h1> THIS IS {selectedColor.name.toUpperCase()}.</h1>
                <h2> ISN'T IT BEAUTIFUL?</h2>
                <Link to="/colors" className="go-back-link">
                    GO BACK
                </Link>
            </div>
        </div>
    );
}

export default ColorDetails;