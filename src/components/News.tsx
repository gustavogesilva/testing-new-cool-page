
import { useRef, useEffect, useState } from "react";

interface Article {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const ArticleCard = ({
  article,
  delay,
  isVisible,
}: {
  article: Article;
  delay: number;
  isVisible: boolean;
}) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
  >
    <div
      className="h-48 bg-cover bg-center"
      style={{ backgroundImage: `url(${article.image})` }}
    />
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
      <h3 className="text-xl font-semibold mb-3 text-[#002A5C]">
        {article.title}
      </h3>
      <p className="text-gray-700 mb-4">{article.excerpt}</p>
      <a
        href="#"
        className="text-[#002A5C] font-medium hover:underline flex items-center"
      >
        Read More
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
);

const News = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const articles: Article[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
      date: "April 5, 2023",
      title: "Elion Partners Acquires Industrial Portfolio in Miami",
      excerpt: "The acquisition adds 300,000 square feet of logistics space to Elion's growing South Florida portfolio.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      date: "March 12, 2023",
      title: "New Distribution Center Completed in Seattle Market",
      excerpt: "Elion completes development of a 150,000 sf last-mile distribution facility in the Seattle metro area.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      date: "February 28, 2023",
      title: "Elion Partners Announces ESG Initiatives for 2023",
      excerpt: "New sustainability goals aim to reduce carbon emissions across the portfolio by 40% by 2030.",
    },
  ];

  return (
    <section id="news" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#002A5C]">
            Latest News
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest acquisitions, developments, and company announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#002A5C] text-white px-8 py-3 rounded hover:bg-blue-900 transition-all">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
