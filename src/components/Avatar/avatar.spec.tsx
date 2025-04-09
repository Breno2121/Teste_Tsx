import { render, screen } from "@testing-library/react"
import Avatar from "."

describe('Componente avatar', () => {
    it('Deve renderizar o componente de avatar sem borda.', () => {
        render(<Avatar src="teste" hasBorder={true} />)

        const avatarElement = screen.getByTestId('avatar');

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar");
    })
    it('Deve renderizar o componente de avatar com borda.', () => {
        render(<Avatar src="teste" />)

        const avatarElement = screen.getByTestId('avatar');

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar-width-boarder");
    })
})
