import React from 'react';
import { FaLeaf, FaFish, FaGlassMartiniAlt } from 'react-icons/fa';

const Menu = () => {
  return (
    <section id="menu" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">メニュー</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4 text-center p-4">
              <div className="card-body">
                <FaLeaf size={40} className="text-success mb-3" />
                <h5 className="card-title">前菜</h5>
                <p className="card-text">季節の野菜を使ったサラダ - ¥1,200</p>
                <p className="card-text">鮮魚のカルパッチョ - ¥1,500</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4 text-center p-4">
              <div className="card-body">
                <FaFish size={40} className="text-primary mb-3" />
                <h5 className="card-title">メインディッシュ</h5>
                <p className="card-text">国産牛のステーキ - ¥3,500</p>
                <p className="card-text">本日のお魚料理 - ¥2,800</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4 text-center p-4">
              <div className="card-body">
                <FaGlassMartiniAlt size={40} className="text-danger mb-3" />
                <h5 className="card-title">デザート</h5>
                <p className="card-text">自家製ティラミス - ¥800</p>
                <p className="card-text">季節のフルーツタルト - ¥900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;