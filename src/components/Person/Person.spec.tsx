import { render, screen } from "@testing-library/react"
import Person from "."

describe("Componente de Person com dados", () => {
    it("Deve renderizar o componente de Person", () => {
        render(<Person nome="Joe Doe" idade={20} />)

        const name = screen.getByText("Joe Doe", {exact: false})
        const idade = screen.getByText("20", {exact: false})
        expect(name).toBeInTheDocument();
        expect(idade).toBeInTheDocument();
    })
})
