import { render, screen } from "@testing-library/react"
import Header from "."

describe("Componente Header", () => {
    it("Deve renderizar o componente header", () => {
        render(<Header />); 

        const element = screen.getByAltText("Logo")
        expect(element).toBeInTheDocument();


    })

})