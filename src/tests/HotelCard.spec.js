import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HotelCard from "../components/HotelCard.jsx";

describe("HotelCard Component", () => {
  it("debe renderizar correctamente las props y responder al clic", () => {
    const mockHotel = {
      id: 1,
      nombre: "Hotel Test",
      imagen: ["test.jpg"],
      region: "Región de prueba",
      calificacion: 4,
      precio: 10000,
    };

    
    const mockVerHotel = jasmine.createSpy("mockVerHotel");

    const { getByTestId } = render(
      <HotelCard hotel={mockHotel} verHotel={mockVerHotel} />
    );

    
    expect(getByTestId("hotel-nombre").textContent).toContain("Hotel Test");
    expect(getByTestId("hotel-region").textContent).toContain("Región de prueba");
    expect(getByTestId("hotel-calificacion").textContent).toContain("⭐⭐⭐⭐");
    expect(getByTestId("hotel-precio").textContent).toContain("$10.000");
    expect(getByTestId("hotel-imagen").getAttribute("alt")).toBe("Hotel Test");

    
    fireEvent.click(getByTestId("hotel-card-1"));
    expect(mockVerHotel).toHaveBeenCalledWith(1);
  });
});
