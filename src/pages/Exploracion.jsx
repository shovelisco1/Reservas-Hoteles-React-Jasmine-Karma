    import React, { useState, useEffect } from "react";
    import hoteles from "../data/detallesHoteles";
    import { useNavigate } from "react-router-dom";
    import "bootstrap/dist/css/bootstrap.min.css";

    // Componente interno para mostrar cada tarjeta de hotel
    function HotelCard({ hotel, verHotel }) {
    return (
        <div className="col-md-4">
        <div className="card mb-4" style={{ cursor: "pointer" }} onClick={() => verHotel(hotel.id)}>
            <img
            src={hotel.imagen[0]}
            className="card-img-top"
            alt={hotel.nombre}
            style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
            <h5 className="card-title">{hotel.nombre}</h5>
            <p className="card-text">${hotel.precio.toLocaleString("es-CL")}</p>
            </div>
        </div>
        </div>
    );
    }

    export default function Exploracion() {
    const [region, setRegion] = useState("");
    const [calificacion, setCalificacion] = useState("");
    const [precio, setPrecio] = useState("");
    const [hotelesFiltrados, setHotelesFiltrados] = useState(hoteles);
    const regionesUnicas = [...new Set(hoteles.map((h) => h.region))];
    const navigate = useNavigate();

    useEffect(() => {
        let lista = [...hoteles];

        if (region) lista = lista.filter((h) => h.region === region);
        if (calificacion) lista = lista.filter((h) => h.calificacion >= parseInt(calificacion));
        if (precio) {
        const [min, max] = precio.split("-").map(Number);
        lista = lista.filter((h) => h.precio >= min && h.precio <= max);
        }

        setHotelesFiltrados(lista);
    }, [region, calificacion, precio]);

    const verHotel = (id) => navigate(`/hotel/${id}`);
    const cerrarSesion = () => navigate("/");

    return (
        <div
        className="bg-light"
        style={{
            minHeight: "100vh",
            backgroundImage:
            'url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png")',
        }}
        >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <a className="navbar-brand" href="/">StayChile</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="/">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="/reservas">Reservas</a></li>
                <li className="nav-item"><a className="nav-link active" href="/exploracion">Hoteles</a></li>
                <li className="nav-item">
                    <button className="nav-link btn btn-link" onClick={cerrarSesion}>Cerrar Sesión</button>
                </li>
                </ul>
            </div>
            </div>
        </nav>

        <div className="container my-4">
            <h2 className="text-center mb-4">Explora Hoteles</h2>

            <div className="row g-3 mb-4">
            <div className="col-md-4">
                <label className="form-label">Región</label>
                <select className="form-select" value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">Todas</option>
                {regionesUnicas.map((r) => (
                    <option key={r} value={r}>{r}</option>
                ))}
                </select>
            </div>
            <div className="col-md-4">
                <label className="form-label">Calificación</label>
                <select className="form-select" value={calificacion} onChange={(e) => setCalificacion(e.target.value)}>
                <option value="">Todas</option>
                <option value="5">5 estrellas</option>
                <option value="4">4 estrellas o más</option>
                <option value="3">3 estrellas o más</option>
                </select>
            </div>
            <div className="col-md-4">
                <label className="form-label">Precio</label>
                <select className="form-select" value={precio} onChange={(e) => setPrecio(e.target.value)}>
                <option value="">Todos</option>
                <option value="0-25000">$0 - $25.000</option>
                <option value="25000-50000">$25.000 - $50.000</option>
                <option value="50000-100000">$50.000 - $100.000</option>
                <option value="100000-9999999">Más de $100.000</option>
                </select>
            </div>
            </div>

            <div className="row g-4">
            {hotelesFiltrados.length > 0 ? (
                hotelesFiltrados.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} verHotel={verHotel} />
                ))
            ) : (
                <p className="text-center text-muted">No se encontraron hoteles con esos filtros.</p>
            )}
            </div>
        </div>
        </div>
    );
    }
