export default function About() {
    return (
        <div className="flex flex-col md:flex-row p-6 md:p-12">
            <section className="left-sec w-full md:w-1/2 p-4">
                <h1 className="text-3xl font-bold mb-2 text-red-500">We Leave A Delicious Memory For You</h1>
                <p className="mb-4 text-base">
                    Klassy Cafe is one of the best restaurant HTML templates with Bootstrap v4.5.2 CSS framework. You can download and feel free to use this website template layout for your restaurant business. You are allowed to use this template for commercial purposes.
                    <br />
                    You are NOT allowed to redistribute the template ZIP file on any template download website. Please contact us for more information.
                </p>
                <div className="flex flex-wrap justify-center space-x-4">
                    <img src="/images/about-thumb-01.jpg" alt="Image 1" className="w-1/3 md:w-1/4 rounded-lg mb-4" />
                    <img src="/images/about-thumb-02.jpg" alt="Image 2" className="w-1/3 md:w-1/4 rounded-lg mb-4" />
                    <img src="/images/about-thumb-03.jpg" alt="Image 3" className="w-1/3 md:w-1/4 rounded-lg mb-4" />
                </div>
            </section>
            <section className="right-sec w-full md:w-1/2 p-4">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID" // استبدل VIDEO_ID بمعرف الفيديو الخاص بك
                    title="وصف الفيديو"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
}