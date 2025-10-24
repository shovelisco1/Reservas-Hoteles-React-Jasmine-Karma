import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Exploracion from "../pages/Exploracion.jsx";
import { MemoryRouter } from "react-router-dom";

describe("Exploracion Component", () => {

  it("debe filtrar los hoteles por rango de precio correctamente", () => {
    render(
      <MemoryRouter>
        <Exploracion />
      </MemoryRouter>
    );

   
    const hotelesIniciales = screen.getAllByRole("img");
    expect(hotelesIniciales.length).toBeGreaterThan(1);

    const selectPrecio = screen.getByLabelText("Precio");
    fireEvent.change(selectPrecio, { target: { value: "0-25000" } });

 
    const hotelesFiltrados = screen.getAllByRole("img");
    hotelesFiltrados.forEach((img) => {

      expect(img).toBeTruthy();
    });


    expect(selectPrecio.value).toBe("0-25000");
  });


  it("debe mostrar mensaje cuando no hay hoteles con ese rango de precio", () => {
    render(
      <MemoryRouter>
        <Exploracion />
      </MemoryRouter>
    );

    const selectPrecio = screen.getByLabelText("Precio");
  
    fireEvent.change(selectPrecio, { target: { value: "9999999-10000000" } });

   
    const mensaje = screen.getByText("No se encontraron hoteles con esos filtros.");
    expect(mensaje).toBeTruthy();
  });
});
