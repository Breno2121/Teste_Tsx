import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonCustom from '.';

describe('Test Button Custom', () => {
    it('Deve renderizar o componente Button Custom', () => {
        render(<ButtonCustom />)

        const button = screen.getByText("Publicar")
    })

    it('Deve renderizar o componente e testar o click do botao', () => {
        const handleMock = jest.fn();
        render(<ButtonCustom text='Publicar' handle={handleMock} />)

        const button = screen.getByText('Publicar');
        expect(button).toBeInTheDocument();

        fireEvent.click(button)

        expect(handleMock).toHaveBeenCalled();
        expect(handleMock).toHaveBeenCalledTimes(1);

    })
})