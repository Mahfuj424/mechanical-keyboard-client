import SecondNavbar from "@/components/ui/shared/SecondNavbar";

const ContactForm = () => {
  return (
    <div>
      <SecondNavbar currNav="Contact us" prevNav="home" />
      <div
        className="min-h-screen bg-cover bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(https://solutek-html.netlify.app/assets/images/contact-bg2.png)`,
        }}
      >
        <div className="container lg:max-w-7xl mx-auto px-4 xl:px-0 mt-5">
          <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-2xl">
            <h2 className="text-2xl font-bold mb-6 text-red-500">Contact Us</h2>
            <p className="text-lg mb-6">
              Make an Online Appointment Booking For Business Planning.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border rounded-xl p-4 w-full focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                placeholder="Your E-Mail *"
                className="border rounded-xl p-4 w-full focus:outline-none focus:border-red-500"
              />
              <input
                type="text"
                placeholder="Subject *"
                className="border rounded-xl p-4 w-full focus:outline-none focus:border-red-500"
              />
              <input
                type="tel"
                placeholder="Phone *"
                className="border rounded-xl p-4 w-full focus:outline-none focus:border-red-500"
              />
              <textarea
                placeholder="Message"
                className="border rounded-xl p-4 w-full md:col-span-2 focus:outline-none focus:border-red-500"
                rows="4"
              />
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-4 rounded-xl mt-4 md:col-span-2 hover:bg-red-600 transition duration-300"
              >
                SEND NOW &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-5">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.094403888616!2d-122.41941568468143!3d37.77492927975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d5f2359ab%3A0x3f4e056b2457b1b5!2sTwitter!5e0!3m2!1sen!2sus!4v1614864686393!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
