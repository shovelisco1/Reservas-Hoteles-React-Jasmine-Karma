import React from "react";



export default function HotelCard({ hotel, verHotel }) {
  if (!hotel) return null;

  const handleClick = () => {
    if (typeof verHotel === "function") verHotel(hotel.id);
  };

  return (
    <div
      className="col-md-4"
      style={{ cursor: "pointer" }}
      onClick={handleClick}
      data-testid={`hotel-card-${hotel.id}`}
    >
      <div className="card h-100 shadow-sm">
        <img
          src={hotel.imagen[0]}
          alt={hotel.nombre}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          data-testid="hotel-imagen"
        />
        <div className="card-body">
          <h5 className="card-title" data-testid="hotel-nombre">
            {hotel.nombre}
          </h5>
          <p className="card-text" data-testid="hotel-region">
            <strong>Región:</strong> {hotel.region}
          </p>
          <p className="card-text" data-testid="hotel-calificacion">
            <strong>Calificación:</strong> {"⭐".repeat(hotel.calificacion)}
          </p>
          <p className="card-text" data-testid="hotel-precio">
            <strong>Precio:</strong> ${hotel.precio.toLocaleString("es-CL")}
          </p>
          <button
            className="btn btn-primary w-100"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            data-testid="hotel-vermas"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
