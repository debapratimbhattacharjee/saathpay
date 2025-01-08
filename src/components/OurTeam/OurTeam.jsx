import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
    return (
        <div className="container p-5">
            <div className="text_area text-center">
                <h1>Meet our Team</h1>
                <p>An enthusiastic &amp; super curious group of people who are simplifying financial education for India.</p>
            </div>
            <div className="row my-sm-5 px-3 card__div">
                {/* Debapratim Card */}
                <div className="col-lg-3 px-sm-5 pb-5">
                    <div className="card" style={{ width: "15rem", borderRadius: "12px", background: "rgba(255, 255, 255, 0.74)" }}>
                        <img src="https://via.placeholder.com/150" className="card-img-top card__img" alt="Debapratim" />
                        <div className="card-body" style={{ backgroundColor: "transparent" }}>
                            <h5 className="card-title text-center" style={{ color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500" }}>Debapratim Bhattacharjee</h5>
                        </div>
                    </div>
                </div>
                {/* Tanmoy Card */}
                <div className="col-lg-3 px-sm-5 pb-5">
                    <div className="card" style={{ width: "15rem", borderRadius: "12px", background: "rgba(255, 255, 255, 0.74)" }}>
                        <img src="https://via.placeholder.com/150" className="card-img-top card__img" alt="Tanmoy" />
                        <div className="card-body" style={{ backgroundColor: "transparent" }}>
                            <h5 className="card-title text-center" style={{ color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500" }}>Tanmoy</h5>
                        </div>
                    </div>
                </div>
                {/* Souradeep Card */}
                <div className="col-lg-3 px-sm-5 pb-5">
                    <div className="card" style={{ width: "15rem", borderRadius: "12px", background: "rgba(255, 255, 255, 0.74)" }}>
                        <img src="https://via.placeholder.com/150" className="card-img-top card__img" alt="Souradeep" />
                        <div className="card-body" style={{ backgroundColor: "transparent" }}>
                            <h5 className="card-title text-center" style={{ color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500" }}>Souradeep</h5>
                        </div>
                    </div>
                </div>
                {/* Aushik Card */}
                <div className="col-lg-3 px-sm-5 pb-5">
                    <div className="card" style={{ width: "15rem", borderRadius: "12px", background: "rgba(255, 255, 255, 0.74)" }}>
                        <img src="https://via.placeholder.com/150" className="card-img-top card__img" alt="Aushik" />
                        <div className="card-body" style={{ backgroundColor: "transparent" }}>
                            <h5 className="card-title text-center" style={{ color: "#212529", marginBottom: "0.75rem", fontSize: "1.25rem", fontWeight: "500" }}>Aushik</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
