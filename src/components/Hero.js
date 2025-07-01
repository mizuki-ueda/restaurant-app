import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container text-center">
        <h1>美味しい料理で、特別なひとときを。</h1>
        <p className="lead">新鮮な食材と心からのおもてなしで、皆様をお待ちしております。</p>
        <a href="#menu" className="btn btn-primary btn-lg mt-3">メニューを見る</a>
      </div>
    </section>
  );
};

export default Hero;