import { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
    const [cur, setCur] = useState(0);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(cur, 0)));
    }, [cur]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCur((val) => (val < 100 ? val + 1 : 100));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <span>Progress Bar</span>
            <div className="wrapper">
                <div
                    className="progress-done"
                    style={{ transform: `scaleX(${percent / 100})`, transformOrigin: "left" }}
                >
                    <span>{percent}%</span>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
