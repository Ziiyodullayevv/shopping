import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="parent">

        <div className="details-card">
          <div className="card-left">
            <h1>
              Best deals <span>Crispy Sandwiches</span>
            </h1>

            <p>
              Enjoy the large size of sandwiches.
              Complete perfect slice of sandwiches.
            </p>

            <button>
              PROCEED TO ORDER <span>›</span>
            </button>
          </div>

          <div className="card-right">
            <img
              src="https://t4.ftcdn.net/jpg/02/44/39/85/360_F_244398519_gGmUBJH9Jznq76ND0d9LTpwOr6NEmT2J.jpg"
              alt="sandwich"
            />
          </div>
        </div>

        <div className="details-card1">
          <div className="card-right1">
            <img
              src="https://avatars.mds.yandex.net/i?id=bbe44d08ebe80c875478cada8c4def9e4e936e0a-5232579-images-thumbs&n=13"
              alt="burger"
            />
          </div>

          <div className="card-left1">
            <h1>
              Best deals <span>Crispy Sandwiches</span>
            </h1>

            <p>
              Enjoy the large size of sandwiches.
              Complete perfect slice of sandwiches.
            </p>

            <button>
              PROCEED TO ORDER <span>›</span>
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container1">

          <div className="col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Ride with us</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="col2">
            <h5>FOLLOW US</h5>
            <p className="text">Receive exclusive offers in your mailbox</p>

            <div className="box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
