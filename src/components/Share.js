import React from 'react';
import {
  FacebookShareButton, FacebookIcon,
  TelegramShareButton, TelegramIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon
} from 'react-share';

function Share(props) {
  return (
    <nav className="Share">
      <ul className="list-unstyled">
        <li>
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={25} round={true} />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={25} round={true} />
          </TwitterShareButton>
        </li>
        <li>
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={25} round={true} />
          </WhatsappShareButton>
        </li>
        <li>
          <TelegramShareButton url={window.location.href}>
            <TelegramIcon size={25} round={true} />
          </TelegramShareButton>
        </li>
      </ul>
    </nav>
  );
}

export default Share;