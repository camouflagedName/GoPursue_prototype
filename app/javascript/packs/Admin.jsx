// This connect directly to the related view file in app/views which Rails connects to the controller

import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/stylesheets/app.scss';
import Website from '../AdminPortal/Website';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'))
  const root = createRoot(container)

  root.render(<Website />)
});

