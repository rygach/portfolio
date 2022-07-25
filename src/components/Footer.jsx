import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul className="contacts">
        <li>
          <a href="">rygacher@gmail.com</a>
        </li>
        <li>
          <a href="">telegram</a>
        </li>
        <li>
          <a href="">github</a>
        </li>
        <li>
          <div className="sort">
            <div>
              <b>Скачать резюме в формате:</b>
              <span>PDF</span>
            </div>
            <div className="sort__popup">
              <ul>
                <li className="active">PDF</li>
                <li className="active">DOCX (удобно для правки)</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
