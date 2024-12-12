import React from "react";

const Hero = () => {
  return (
    <section className="container flex responsive">
      <div>
        <h2>Welcome to My Landing Page</h2>
        <p>Discover amazing features and build your dreams with us.</p>
        <button>
          <div>
            <span>
              <p>Hover Me</p>
            </span>
          </div>
          <div>
            <span>
              <p>Thanks</p>
            </span>
          </div>
        </button>
      </div>
      <img src="https://avatar.iran.liara.run/public" alt="Avatar" />
    </section>
  );
};

export default Hero;
