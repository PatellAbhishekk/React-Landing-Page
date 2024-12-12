import React from "react";

const Features = () => {
  const features = [
    {
      title: "Fast Performance",
      description: "Enjoy blazing fast performance.",
    },
    { title: "Responsive Design", description: "Looks great on all devices." },
    { title: "Easy to Use", description: "Simple and intuitive interface." },
  ];

  return (
    <section id="features" className="container">
      <strong>Features</strong>
      <div className="flex responsive">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
