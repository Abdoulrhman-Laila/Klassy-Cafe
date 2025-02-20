import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
    return (
        <div className="flex flex-col md:flex-row justify-between p-6 md:p-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('images/reservation-bg.jpg')" }}>
            {/* القسم الأيسر */}
            <section className="w-full md:w-1/2 p-4 rounded-lg shadow-md ">
                <h1 className="text-3xl font-bold mb-2 text-white">Contact Us</h1>
                <p className="mb-4 text-white">
                    Here You Can Make A Reservation Or Just Walk Into Our Cafe
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    {/* بطاقة الهاتف */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 flex-1">
                        <div className="flex items-center justify-center bg-red-500 text-white rounded-full h-12 w-12 mb-2">
                            <FaPhoneAlt className="h-6 w-6" />
                        </div>
                        <h2 className="text-lg font-semibold">Phone Numbers</h2>
                        <p>+00 123-456-7890</p>
                        <p>+00 098-765-4321</p>
                    </div>

                    {/* بطاقة البريد الإلكتروني */}
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 flex-1">
                        <div className="flex items-center justify-center bg-red-500 text-white rounded-full h-12 w-12 mb-2">
                            <FaEnvelope className="h-6 w-6" />
                        </div>
                        <h2 className="text-lg font-semibold">Emails</h2>
                        <p>hello@company.com</p>
                        <p>info@company.com</p>
                    </div>
                </div>
            </section>

            {/* القسم الأيمن - نموذج حجز الطاولة */}
            <section className="w-full md:w-1/2 p-4  rounded-lg shadow-md">
                <h2 className="font-bold mb-4 text-3xl text-white">Table Reservation</h2>
                <form className="bg-white p-6 rounded-md shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" className="border border-gray-300 p-2 w-full rounded-md" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="border border-gray-300 p-2 w-full rounded-md" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" className="border border-gray-300 p-2 w-full rounded-md" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="date">Date</label>
                            <input type="date" id="date" className="border border-gray-300 p-2 w-full rounded-md" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="time">Time</label>
                            <input type="time" id="time" className="border border-gray-300 p-2 w-full rounded-md" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="guests">Number of Guests</label>
                            <input type="number" id="guests" className="border border-gray-300 p-2 w-full rounded-md" required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                        <textarea id="message" className="border border-gray-300 p-2 w-full rounded-md" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-red-500 text-white p-2 rounded-md transition duration-300 hover:bg-red-600">
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
}