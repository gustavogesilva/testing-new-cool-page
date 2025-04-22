import ScrollReveal from "./ScrollReveal";
const ApproachCard = ({
  number,
  title,
  description,
  delay
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) => <ScrollReveal delay={delay}>
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:transform hover:translate-y-[-5px]">
      <div className="text-[#002A5C] text-4xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-3 text-[#002A5C]">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </ScrollReveal>;
const Approach = () => {
  const approaches = [{
    number: "01",
    title: "Identify",
    description: "We identify assets in high-growth markets with strong fundamentals and potential for value creation.",
    delay: 100
  }, {
    number: "02",
    title: "Acquire",
    description: "Our acquisition strategy focuses on assets with strong upside potential through operational improvements.",
    delay: 300
  }, {
    number: "03",
    title: "Optimize",
    description: "We implement strategic enhancements to increase property value and operational efficiency.",
    delay: 500
  }, {
    number: "04",
    title: "Scale",
    description: "Our portfolio grows through disciplined expansion in target markets across the country.",
    delay: 700
  }];
  return <section id="approach" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-left">A DIFFERENTIATED AND HOLISTIC APPROACH </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => <ApproachCard key={index} number={approach.number} title={approach.title} description={approach.description} delay={approach.delay} />)}
        </div>
      </div>
    </section>;
};
export default Approach;