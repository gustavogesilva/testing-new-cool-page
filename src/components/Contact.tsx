
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team is ready to explore opportunities and answer your questions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#002A5C]">
                Get In Touch
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500 transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#002A5C] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#002A5C]">
                Our Offices
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Headquarters",
                    address: "1250 Connecticut Ave NW, Suite 700",
                    city: "Washington, DC 20036",
                    phone: "(202) 555-1234",
                    email: "info@elionpartners.com"
                  },
                  {
                    title: "Miami Office",
                    address: "800 Brickell Avenue, Suite 1200",
                    city: "Miami, FL 33131",
                    phone: "(305) 555-5678",
                    email: "miami@elionpartners.com"
                  },
                  {
                    title: "New York Office",
                    address: "450 Lexington Avenue, 4th Floor",
                    city: "New York, NY 10017",
                    phone: "(212) 555-9012",
                    email: "newyork@elionpartners.com"
                  }
                ].map((office, index) => (
                  <div 
                    key={index}
                    className="hover:bg-gray-50 p-4 rounded-lg transition-all duration-300"
                  >
                    <h4 className="text-xl font-medium mb-2 text-[#002A5C]">
                      {office.title}
                    </h4>
                    <p className="text-gray-700">
                      {office.address}
                      <br />
                      {office.city}
                    </p>
                    <p className="mt-2 text-gray-700">
                      Phone: {office.phone}
                      <br />
                      Email: {office.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
