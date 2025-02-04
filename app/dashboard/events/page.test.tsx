import { render, screen, fireEvent } from '@testing-library/react';
import EventsTab from '../../ui/dashboard/events-tab';
import { ReservationsType } from '../../lib/definitions';

const mockEvents = [
    {
        id: '1',
        trip_name: 'Wycieczka do Krakowa',
        start_date: '2025-02-01',
        end_date: '2025-02-10',
        status_label: 'W trakcie',
        company_name: 'Firma A',
        product_data: {
            type: 'Wycieczka szkolna',
            location: { city: 'Kraków', province: 'Małopolskie' },
            country_name: 'Polska',
            main_photo: {
                url: '/image1.jpg',
                width: 800,
                height: 600,
            },
        },
    },
    {
        id: '2',
        trip_name: 'Wycieczka do Gdańska',
        start_date: '2025-03-01',
        end_date: '2025-03-05',
        status_label: 'Zakończona',
        company_name: 'Firma B',
        product_data: {
            type: 'Wycieczka szkolna',
            location: { city: 'Gdańsk', province: 'Pomorskie' },
            country_name: 'Polska',
            main_photo: {
                url: '/image2.jpg',
                width: 800,
                height: 600,
            },
        },
    },
];

describe('EventsTab', () => {
    it('renders the tab titles correctly', () => {
        render(<EventsTab events={mockEvents as ReservationsType} />);

        const tab1 = screen.getByText('Moje rezerwacje');
        const tab2 = screen.getByText('Zakończone');

        expect(tab1).toBeInTheDocument();
        expect(tab2).toBeInTheDocument();
    });

    it('displays event details in the "Moje rezerwacje" tab', () => {
        render(<EventsTab events={mockEvents as ReservationsType} />);

        const eventTitle = screen.getByText('Wycieczka do Krakowa');
        expect(eventTitle).toBeInTheDocument();

        const eventLocation = screen.getByText('Kraków, Małopolskie, Polska');
        expect(eventLocation).toBeInTheDocument();

        const eventDate = screen.getByText('2025-02-01 - 2025-02-10');
        expect(eventDate).toBeInTheDocument();
    });

    it('displays "Brak danych" in the "Zakończone" tab', () => {
        render(<EventsTab events={mockEvents as ReservationsType} />);


        const tab2 = screen.getByText('Zakończone');
        fireEvent.click(tab2);

        const noDataMessage = screen.getByText('Brak danych');
        expect(noDataMessage).toBeInTheDocument();
    });

    it('changes the active tab when clicked', () => {
        render(<EventsTab events={mockEvents as ReservationsType} />);

        const tab1 = screen.getByText('Moje rezerwacje');
        const tab2 = screen.getByText('Zakończone');

        expect(tab1).toHaveClass('Mui-selected');

        fireEvent.click(tab2);
        expect(tab2).toHaveClass('Mui-selected');
        expect(tab1).not.toHaveClass('Mui-selected');
    });

    it('renders images with correct alt texts for each event', () => {
        render(<EventsTab events={mockEvents as ReservationsType} />);

        mockEvents.forEach((event) => {
            const image = screen.getByAltText(`Obraz dla wycieczki - ${event.trip_name}`);
            expect(image).toBeInTheDocument();
        });

        const allEventImages = screen.getAllByAltText(/Obraz dla wycieczki/i);
        expect(allEventImages.length).toBe(mockEvents.length);
    });
});
