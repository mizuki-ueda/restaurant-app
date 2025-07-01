
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="fw-bold">当店について</h2>
            <p>私たちは、お客様に最高の食体験を提供することを目指しています。季節ごとに変わる新鮮な食材を使い、シェフが腕によりをかけて一皿一皿を丁寧に作り上げます。落ち着いた雰囲気の店内で、大切な方との素敵な時間をお過ごしください。</p>
          </div>
          <div className="col-lg-6">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="レストランの内装" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
