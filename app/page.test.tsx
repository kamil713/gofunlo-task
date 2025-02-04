import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
    test('renders GoFunlo task text', () => {
        render(<Home />);

        const heading = screen.getByText(/GoFunlo - zadanie rekrutacyjne/i);
        expect(heading). toBeInTheDocument();
    });

    test('renders link with correct href', () => {
        render(<Home />);

        const link = screen.getByText(/Kliknij aby przejść do zadania/i);
        expect(link).toBeInTheDocument();

        expect(link.closest('a')).toHaveAttribute('href', '/dashboard/offers');
    });
});
