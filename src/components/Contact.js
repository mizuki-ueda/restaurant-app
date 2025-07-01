import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">お問い合わせ・ご予約</h2>
        <form className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">お名前</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">メールアドレス</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">メッセージ</label>
            <textarea className="form-control" id="message" rows="5"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-50">送信</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;