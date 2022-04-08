// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../assets/stylesheets/app.scss'
import NewUserMailer from "../Mailer/views/NewUserMailer"


document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'))
  const root = createRoot(container)

  root.render(<NewUserMailer />)
});
