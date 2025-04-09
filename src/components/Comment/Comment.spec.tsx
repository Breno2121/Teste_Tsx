import { fireEvent, render, screen } from "@testing-library/react";
import Comment from ".";

const mockComment = {
    id: "1",
    like: 3,
    comment: "Hello, how are you",
    publishedAt: new Date(),
    author: {
        name: "Joe Doe",
        role: "dev",
        avatarUrl: 'joedoe.png'
    }
}
describe('Comment component', () => {
    it("Deve renderizar um comentario", () => {
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={jest.fn()} />)

        expect(screen.getByText("Joe Doe")).toBeInTheDocument();
        expect(screen.getByText("há menos de um minuto")).toBeInTheDocument();
        expect(screen.getByText("Hello, how are you")).toBeInTheDocument();
        expect(screen.getByText("Apludir")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
    })

    it("Deve verificar se a funcao handleLike foi chamada com id correto", () => {
        const handleLike = jest.fn();
        render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={handleLike} />)
        const likeButton = screen.getByText("Apludir");
        fireEvent.click(likeButton);

        expect(handleLike).toHaveBeenCalled();
        expect(handleLike).toHaveBeenCalledTimes(1);
        expect(handleLike).toHaveBeenCalledWith(expect.any(Object), "1");
    })

    it("Deve verificar se a funcao handleDelete foi chamada com id correto", () => {
        const handleDelete = jest.fn();
        render(<Comment comment={mockComment} handleDelete={handleDelete} handleLike={jest.fn()} />)
       
        const deleteButton = screen.getByTestId("deletar");
        fireEvent.click(deleteButton);

        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "1");
    })
});



