import React from 'react'

const SectionTwo = () => {
  return (
    <>
        <div class="sectionTwo">
        <div class="sectionTwo__titles">
            <h1 class="sectionTwo__titles-big-title">Explore Marketplace</h1>
            <h3 class="sectionTwo__titles-small-title">Discover the best nft collections in the world on our site.</h3>
        </div>
        <div class="sectionTwo__buttons">
           <button class="art stbtn">Art</button>
           <button class="collectibles stbtn">Collectibles</button>
           <button class="gaming stbtn">Gaming</button>
           <button class="sports stbtn">Sports</button>
           <button class="photography stbtn">Photography</button>
           <button class="music stbtn">Music</button>
           <button class="virtual_world stbtn">Virtual World</button>
           <button class="more stbtn">More</button>
        </div>
        <div class="sectionTwo__cards">
            <div class="sectionTwo__cards-cardOne card cardOne">
                    <div class="sectionTwo__cards-titles">
                        <h1 class="sectionTwo__cards-title">Monkey #93</h1> <span class="sectionTwo__cards-tag">@mark</span>
                    </div>
                    <img src="./img/monkey93.webp" class="sectionTwo__cards-img" alt='monkey'> </img>
                    <div class="sectionTwo__cards-numbers">
                        <h2 class="sectionTwo__cards-price">0.0334 ETH</h2>
                    </div>
                    <button class="collect__now">Collect Now</button>
            </div>
            <div class="sectionTwo__cards-cardOne card">
                <div class="sectionTwo__cards-titles">
                    <h1 class="sectionTwo__cards-title">Monkey #12</h1> <span class="sectionTwo__cards-tag">@mark</span>
                </div>
                <img src="./img/monkey12.webp" class="sectionTwo__cards-img" alt='monkey'> </img>
                <div class="sectionTwo__cards-numbers">
                    <h2 class="sectionTwo__cards-price">0.0624 ETH</h2>
                </div>
            </div>
            <div class="sectionTwo__cards-cardOne card">
                <div class="sectionTwo__cards-titles">
                    <h1 class="sectionTwo__cards-title">Monkey #43</h1> <span class="sectionTwo__cards-tag">@mark</span>
                </div>
                <img src="./img/monkey43.webp" class="sectionTwo__cards-img" alt='monkey'> </img>
                <div class="sectionTwo__cards-numbers">
                    <h2 class="sectionTwo__cards-price">0.0534 ETH</h2>
                </div>
            </div>
            <div class="sectionTwo__cards-cardOne card">
                <div class="sectionTwo__cards-titles">
                    <h1 class="sectionTwo__cards-title">Monkuy</h1> <span class="sectionTwo__cards-tag">@maks</span>
                </div>
                <img src="./img/monkuy.webp" class="sectionTwo__cards-img" alt='monkey'> </img>
                <div class="sectionTwo__cards-numbers">
                    <h2 class="sectionTwo__cards-price">0.0222 ETH</h2>
                </div>
            </div>
            <div class="sectionTwo__cards-cardOne card">
                <div class="sectionTwo__cards-titles">
                    <h1 class="sectionTwo__cards-title">Monks</h1> <span class="sectionTwo__cards-tag">@mahlah</span>
                </div>
                <img src="./img/monks.webp" class="sectionTwo__cards-img" alt='monkey'> </img>
                <div class="sectionTwo__cards-numbers">
                    <h2 class="sectionTwo__cards-price">0.0789 ETH</h2>
                </div>
             </div>
            <div class="sectionTwo__cards-cardOne card">
                <div class="sectionTwo__cards-titles">
                    <h1 class="sectionTwo__cards-title">Monks blvk</h1> <span class="sectionTwo__cards-tag">@mahlah</span>
                </div>
                <img src="./img/monksblvk.webp" class="sectionTwo__cards-img" alt='monkey'> </img>
                <div class="sectionTwo__cards-numbers">
                    <h2 class="sectionTwo__cards-price">0.0303 ETH</h2>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionTwo