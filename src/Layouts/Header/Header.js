import React from 'react'
import { Link } from 'react-router'

export const HeaderLayout = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </header>
)
