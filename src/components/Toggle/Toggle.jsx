import React, { memo } from "react";
import './Toggle.css';

const Toggle = ({ checked, onChange }) => {
    return (

        <label className="toggle-switch">
            <span className="completed">Completed?</span>
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <span className="slider"></span>
            </div>
        </label>
    );
};

export default memo(Toggle);
