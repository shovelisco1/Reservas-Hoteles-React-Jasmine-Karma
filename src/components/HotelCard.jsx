import React from "react";

export default function HotelCard({ hotel, verHotel }) {
    return (
        <div
            className="col-md-4"
            onClick={() => verHotel(hotel.id)}
            style={{ cursor: "pointer" }}
        >
            <div className="card h-100 shadow-sm">
                <img
                    src={hotel.imagen[0]}
                    className="card-img-top"
                    alt={hotel.nombre}
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{hotel.nombre}</h5>
                    <p className="card-text">
                        <strong>Región:</strong> {hotel.region}
                    </p>
                    <p className="card-text">
                        <strong>Calificación:</strong> {'⭐'.repeat(hotel.calificacion)}
                    </p>
                    <p className="card-text">
                        <strong>Precio:</strong> ${hotel.precio.toLocaleString("es-CL")}
                    </p>
                    <button className="btn btn-primary w-100">Ver más</button>
                </div>
            </div>
        </div>
    );
}
