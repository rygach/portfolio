import React from 'react';

const Home = () => {
  return (
    <div className="content">
      <div className="about">
        <div>
          <h1>Bulat</h1>
          <h2>frontdev from KAZAN</h2>
          <p>
            Живи так, чтобы страх смерти никогда не смущал твое сердце. Никому не мешай верить в то,
            во что они верят, уважай других и их взгляды и требуй такого же уважения к себе. Люби
            жизнь, делай жизнь лучше, украшай все вокруг себя. Стремись жить долго на благо своего
            народа, а когда придет твой час – умри, и не будь как те, чьи сердца полны страха
            смерти, так, что когда приходит их час они рыдают и молят дабы им дали еще времени,
            чтобы прожить жизнь по другому… Пой свою смерть… и погибнув, героем вернись домой! (С)
            Текумсе
          </p>
        </div>
        <div>
          <img
            className="avatar"
            alt="Bulat"
            src="https://sun9-east.userapi.com/sun9-57/s/v1/if1/KPlzlz3zwQ36X5FuAmBnVXzjPEvkW_-wvjgmUy2W-bR7rvVfdcAKSB0sZ-hXmSz92Oo3bIqB.jpg?size=810x1080&quality=96&type=album"></img>
        </div>
      </div>
      <div className="card-block">
        <h2>Популярные проекты</h2>
        <div className="card-block__items">
          <div className="item-card">
            <h3>Project #1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
            <div className="project-card__categories">
              <span className="project-card__categories__item">react</span>
              <span className="project-card__categories__item">laravel</span>
            </div>
          </div>
          <div className="item-card">
            <h3>Project #1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
            <div className="project-card__categories">
              <span className="project-card__categories__item">react</span>
              <span className="project-card__categories__item">laravel</span>
            </div>
          </div>
          <div className="item-card">
            <h3>Project #1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
            <div className="project-card__categories">
              <span className="project-card__categories__item">react</span>
              <span className="project-card__categories__item">laravel</span>
            </div>
          </div>
        </div>
        <a href="" className="projects__link">
          Смотреть все{' '}
        </a>
      </div>
      <div className="card-block">
        <h2>Популярные посты</h2>
        <div className="card-block__items">
          <div className="item-card">
            <h3>Post #1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
            <div className="posts-card__vievs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="posts-card__categories__item"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <span className="posts-card__categories__item">2 455</span>
            </div>
          </div>
          <div className="item-card">
            <h3>Post #1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
            <div className="posts-card__vievs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="posts-card__categories__item"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <span className="posts-card__categories__item">2 455</span>
            </div>
          </div>
          <div className="item-card">
            <h3>Post #1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
            <div className="posts-card__vievs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="posts-card__categories__item"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              <span className="posts-card__categories__item">2 455</span>
            </div>
          </div>
        </div>
        <a href="" className="posts__link">
          Смотреть все{' '}
        </a>
      </div>
    </div>
  );
};

export default Home;
