import React from 'react'

const Navbar = () => {
  return (
    <>
    <div class="header">
            <h1 class="logo">baroud</h1>
            <ul class="header__list">
                <li class="home">Home</li>
                <li class="market">Market</li>
                <li class="what_is_wano">What is Wano?</li>
                <li class="community">Community</li>
            </ul>
            <button class="my__wallet">My Wallet</button>
            <div class="brgr"><i class="fa-solid fa-bars"></i></div>
        </div>
    </>
  )
}

export default Navbar