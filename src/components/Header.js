import React from 'react'

export default function Header() {
  const changeTheme = () => {
    const moon = document.querySelector('.fa-moon')

    moon.addEventListener('click', () => {
      document.body.classList.toggle('light-theme')
      document.body.classList.toggle('country-details')
    })
  }
  return (
    <div>
      <header className='header'>
        <div>
            <h1>All Contries in the World</h1>
        </div>
        <div>
            <i className="fas fa-moon dark" onClick={() => changeTheme()}></i>
        </div>
      </header>
    </div>
  )
}
