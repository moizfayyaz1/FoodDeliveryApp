import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x300/?bbq" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?pizza" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?chicken" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}
