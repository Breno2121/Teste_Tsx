import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Feed from './page';


jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;
const mockPosts = [
    {
        id: "1",
        content: "Post 1",
        publishedAt: new Date("2024-04-10").toISOString(),
        author: {
            name: "Joe Doe",
            role: "Dev",
            avatarUrl: "url-fake"
        },
        comments: []
    },
    {
        id: "2",
        content: "Post 2",
        publishedAt: new Date("2024-04-11").toISOString(),
        author: {
            name: "Joe Doe",
            role: "Dev",
            avatarUrl: "url-fake"
        },
        comments: []
    }
]

describe('Page feed', () => {
    beforeEach(() => {
        mockAxios.get.mockResolvedValue({ data: mockPosts });
        mockAxios.post.mockResolvedValue({});
    })

    it("Deve renderizar a pagina do feed", async () => {
        render(<Feed />)
        expect(screen.getByText('Carregando...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.queryByText('Carregando...')).not.toBeInTheDocument();
        })

        const posts = screen.getAllByTestId("post-test");

        expect(posts.length).toBe(2);
        expect(posts[0]).toHaveTextContent('Post 2')
        expect(posts[1]).toHaveTextContent('Post 1')


        const textarea = screen.getByPlaceholderText("O que você está pensando???");
        expect(textarea).toBeInTheDocument();

        fireEvent.change(textarea, { target: { value: "Meu Novo Post" } })
        expect(textarea).toHaveValue("Meu Novo Post");

        const button = screen.getByText("Publicar-post");
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        await waitFor(() => {
            expect(mockAxios.post).toHaveBeenCalledWith("http://localhost:3001/posts",
                expect.objectContaining({
                    content: 'Meu Novo Post'
                })
            )
            expect(textarea).toHaveValue("")
        })

    
    })
});
