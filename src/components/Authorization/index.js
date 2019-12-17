import React from 'react';

import './style.css';
import { authEndpoint, clientId, redirectUri, scopes } from '../../config';

const Authorization = ({ text }) => (
  <div className="authorization">
    <a className="authorization__button"
      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
      Log in
    </a>
  </div>
);

export default Authorization;