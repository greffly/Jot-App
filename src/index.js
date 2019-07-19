import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'
import 'typeface-roboto'
import './index.css'
import App from './App/App'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

export default function Routes() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

ReactDOM.render(
  <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
