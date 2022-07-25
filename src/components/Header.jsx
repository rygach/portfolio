import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="links">
        <button className="menu">
          <svg
            className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
            viewBox="0 0 20 20"
            fill="none"
            data-hide="false">
            <path
              d="M2.5 7.5H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
            <path
              d="M2.5 12.5H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>
        <a href="">домашняя</a>
        <a href="">посты</a>
        <a href="">проекты</a>
        <a href="">избранное</a>
      </div>
      <div className="nav-func">
        <a href="" alt="night mode">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
            </g>
          </svg>
        </a>
        <a href="" alt="auth-page">
          <svg
            enableBackground="new 0 0 32 32"
            id="Stock_cut"
            version="1.1"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg">
            <desc />
            <g>
              <circle
                cx="16"
                cy="16"
                fill="none"
                r="15"
                stroke="#000000"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
                fill="none"
                stroke="#000000"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <circle
                cx="16"
                cy="11"
                fill="none"
                r="6"
                stroke="#000000"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </g>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Header;
