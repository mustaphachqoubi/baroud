import React from "react";

const SectionOne = () => {
  return (
    <>
      <div class="sectionOne">
        <div class="sectionOne__container">
          <div class="mainOne">
            <div class="hero__titles">
              <h1 class="hero__big_title">
                Collect Super Rare Digital Artworks
                <span class="big__star">✦</span>{" "}
                <span class="small__star">✦</span>
              </h1>
              <h2 class="hero__small_title">
                Discover the best nft collections in the world on our site.
              </h2>
            </div>
            <button class="explore">Explore</button>
            <div class="numbers">
              <div class="artwork n">
                <span class="artwork__number nums">30k+</span>{" "}
                <span class="artwork__text t">Artwork</span>
              </div>
              <div class="auction n">
                <span class="auction__number nums">10k+</span>{" "}
                <span class="auction__text t">Auction</span>
              </div>
              <div class="artist n">
                <span class="artist__number nums">20k+</span>{" "}
                <span class="artist__text t">Artist</span>
              </div>
            </div>
          </div>
          <div class="mainTwo">
            <div class="sectiononecards">
              <div class="sectiononecards__cardOne">
                <div class="sectiononecards__cardOne-titles">
                  <h1 class="sectiononecards__cardOne-title">Monkey #02</h1>{" "}
                  <span class="sectiononecards__cardOne-tag">@mark</span>
                </div>
                <img
                  src="./img/monkey2.png"
                  class="sectiononecards__cardOne-img"
                />
                <div class="sectiononecards__cardOne-numbers">
                  <h2 class="sectiononecards__cardOne-price">1.0324 ETH</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
