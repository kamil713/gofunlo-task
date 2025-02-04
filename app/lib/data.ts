import products from '../mocks/response_products.json'
import bookings from '../mocks/response_bookings.json'

export async function fetchDedicatedOffers() {
    try {
        // Artificially delay a response for demo purposes.
        await new Promise((resolve) => setTimeout(resolve, 3000));

        return products.data.filter(product => product.status !== "DRAFT");
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch dedicated offers data.');
    }
}

export async function fetchReservations() {
    try {
        // Artificially delay a response for demo purposes.
        await new Promise((resolve) => setTimeout(resolve, 3000));

        return bookings.data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch reservations data.');
    }
}