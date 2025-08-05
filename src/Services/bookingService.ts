import api from '@/lib/api';

export interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  serviceCategory: string;
  problemDescription: string;
  preferredDate: string;
  preferredTime: string;
  files?: File[];
};

export interface BookingResponse {
  id: string;
  ticketNumber: string;
  status: string;
  message: string;
};

export const bookingService = {
  // Submit a new booking
  async createBooking(bookingData: BookingData): Promise<BookingResponse> {
    const formData = new FormData();
    
    // Add all booking data to FormData
    Object.entries(bookingData).forEach(([key, value]) => {
      if (key === 'files' && value) {
        (value as File[]).forEach((file) => {
          formData.append('files', file);
        });
      } else {
        formData.append(key, value as string);
      }
    });

    const response = await api.post('/bookings/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data as BookingResponse;
  },

  // Get booking by ID
  async getBooking(id: string) {
    const response = await api.get(`/bookings/${id}/`);
    return response.data;
  },

  // Get all bookings (admin only)
  async getAllBookings() {
    const response = await api.get('/bookings/');
    return response.data;
  },

  // Update booking status (admin only)
  async updateBookingStatus(id: string, status: string) {
    const response = await api.patch(`/bookings/${id}/`, { status });
    return response.data;
  },
};