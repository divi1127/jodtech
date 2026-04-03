import React from "react";

const Industries = () => {
  const industries = [
    {
      name: "Education",
      desc: "Empowering learning with smart digital solutions",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    },
    {
      name: "E-commerce",
      desc: "Scalable platforms for seamless online shopping",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    },
    {
      name: "Finance",
      desc: "Secure and efficient fintech solutions",
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
    },
    {
      name: "Real Estate",
      desc: "Smart property management and listing systems",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    },
    {
      name: "Technologies",
      desc: "Innovative software solutions for modern businesses",
      img: "https://i.pinimg.com/736x/88/14/33/881433e75e1199b92efdc3f5f7e48120.jpg",
    },
    {
      name: "Manufacturing",
      desc: "Automation and efficiency-driven industry solutions",
      img: "https://i.pinimg.com/1200x/e8/c0/d7/e8c0d7fba6aa12ba9fc682afae585c26.jpg",
    },
  ];

  return (
    <section className="relative bg-gray-50">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 pt-10">
        Industries We Support
      </h2>

      <div className="relative flex flex-col items-center">
        {industries.map((item, index) => (
          <div
            key={index}
            className="sticky bottom-20 w-[90%] md:w-[70%] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12"
            style={{ zIndex: industries.length - index }}
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* CENTER CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
              
              <h3 className="text-3xl md:text-4xl font-semibold mb-3">
                {item.name}
              </h3>

              <p className="text-sm md:text-lg max-w-md opacity-90">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

        {/* SCROLL SPACE */}
        <div style={{ height: `${industries.length * 10}px` }}></div>
      </div>
    </section>
  );
};

export default Industries;