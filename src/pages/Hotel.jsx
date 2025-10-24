    import React from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import hoteles from "../data/detallesHoteles";
    import "bootstrap/dist/css/bootstrap.min.css";

    export default function Hotel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = hoteles.find((h) => h.id === id);

    if (!hotel) {
        return (
        <div className="container text-center mt-5">
            <h3>Hotel no encontrado</h3>
        </div>
        );
    }

    const otrosHoteles = hoteles.filter((h) => h.id !== id);

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <a className="navbar-brand" href="/">StayChile</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link active" href="/">Inicio</a></li>
                <li className="nav-item"><a className="nav-link active" href="/reservas">Reservas</a></li>
                <li className="nav-item"><a className="nav-link active" href="/exploracion">Hoteles</a></li>
                <li className="nav-item"><a className="nav-link active" href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
            </div>
        </nav>

        <div className="container my-5 d-flex justify-content-center">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "1200px", width: "100%" }}>
            <div className="row">
                <div className="col-md-6">
                <div id="carouselHotel" className="carousel slide mb-3" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {hotel.imagen.map((img, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img
                            src={img}
                            className="d-block w-100"
                            alt={hotel.nombre}
                            style={{ height: "400px", objectFit: "cover", borderRadius: "8px" }}
                        />
                        </div>
                    ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselHotel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselHotel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-between">
                <div>
                    <h2>{hotel.nombre}</h2>
                    <p>{hotel.descripcion || "Descripción no disponible."}</p>
                    <p><strong>Dirección:</strong> {hotel.direccion || "Dirección no disponible."}</p>
                    <p><strong>Precio por noche:</strong> ${hotel.precio.toLocaleString("es-CL")}</p>
                    <p><strong>Región:</strong> {hotel.region}</p>
                </div>

                <div className="mt-3 d-flex gap-2">
                    <button
                    className="btn btn-success flex-fill"
                    onClick={() => navigate(`/pago?nombre=${encodeURIComponent(hotel.nombre)}&precio=${hotel.precio}`)}
                    >
                    Reservar
                    </button>
                    <button className="btn btn-secondary flex-fill" onClick={() => navigate("/exploracion")}>
                    Volver
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="container my-5 d-flex justify-content-center">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "1200px", width: "100%" }}>
            <h5 className="mb-3 text-center">Hoteles Recomendados</h5>
            <div className="d-flex gap-3 overflow-auto p-2">
                {otrosHoteles.map((h) => (
                <div
                    key={h.id}
                    className="border rounded recomendado-card"
                    style={{ minWidth: "200px", cursor: "pointer" }}
                    onClick={() => navigate(`/hotel/${h.id}`)}
                >
                    <img
                    src={h.imagen[0]}
                    alt={h.nombre}
                    className="w-100"
                    style={{ height: "120px", objectFit: "cover", borderRadius: "5px" }}
                    />
                    <h6 className="mt-2 text-center">{h.nombre}</h6>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    }
