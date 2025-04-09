import { fireEvent, render, screen } from "@testing-library/react";
import TextareaCustom from ".";

describe('TextAreaCustom componente', () => {
    it("Deve renderizar o componente com placeholder correto", () => {
        render(<TextareaCustom message="Hello World" setMessage={jest.fn()} title="Digite aqui..." />)

        const textarea = screen.getByPlaceholderText('Digite aqui...');
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveValue("Hello World");
    })

    it("Deve renderizar o componente e chamar a funcao quando valor for alterado", () => {
        const setMessage = jest.fn();

        render(<TextareaCustom message="Hello Word" setMessage={setMessage} title="Digite aqui..."/>)

        const textarea = screen.getByPlaceholderText("Digite aqui...");
        fireEvent.change(textarea, {target: {value: 'Novo valor'} })

        expect(setMessage).toHaveBeenCalled();
        expect(setMessage).toHaveBeenCalledTimes(1);
        expect(setMessage).toHaveBeenCalledWith("Novo valor");
    })

});