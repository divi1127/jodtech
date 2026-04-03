import { useState, useEffect, useRef } from "react";

const WhyChooseUs = () => {
  const stats = [
    { number: 50, label: "Projects Delivered", suffix: "+" },
    { number: 50, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "+" },
    { number: 24, label: "Support", suffix: "/7" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  // 👇 Detect scroll visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Counter animation
  useEffect(() => {
    if (!start) return;

    const duration = 1500;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const increments = stats.map(stat => stat.number / steps);
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts(prev =>
        prev.map((val, i) =>
          step >= steps ? stats[i].number : Math.ceil(val + increments[i])
        )
      );
      if (step >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [start]);
return (
  <section ref={sectionRef} className="py-20 bg-gray-100 px-6">
    <div className="max-w-6xl mx-auto space-y-16">

      {/* ================= TOP SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-gray-600 font-semibold mb-2 tracking-wide">
            What Sets Us Apart
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Strategies for Client Success
          </h2>
          <div className="w-12 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-600 mb-4">
            We help businesses grow with smart digital solutions tailored to their needs.
          </p>
          <p className="text-gray-600 mb-6">
            Our focus is on performance, scalability, and delivering real results that drive success.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {counts[index]}
                {item.suffix}
              </h3>
              <p className="text-gray-700 text-sm font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ================= TECH STACK ================= */}
      <div className="text-center">
        <h3 className="text-xl md:text-3xl font-semibold mb-20 mt-40">
          Our Technology Stack
        </h3>

        <div className="flex flex-wrap justify-center gap-4 ">
          {[
            "React",
            "Node.js",
            "Next.js",
            "AWS",
            "Docker",
            "MongoDB",
            "MySQL",
            "Firebase",
            "Figma",
          ].map((tech, index) => (
            <div
              key={index}
             className="px-8 py-3 bg-white rounded-full shadow-md text-base md:text-lg font-semibold text-gray-700 hover:scale-110 hover:bg-blue-50 hover:text-blue-600 transition duration-300">              {tech}
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
    
  );
};

export default WhyChooseUs;