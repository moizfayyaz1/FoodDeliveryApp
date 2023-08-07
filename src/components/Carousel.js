import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{objectFit:"contain !important"}} data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-caption" style={{zIndex:"10"}}>
      <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0 text-white bg-success" type="submit">Search</button>
  </form>
    </div>
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x300/?bbq" style={{filter: "brightness(30%)"}} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?pizza" style={{filter: "brightness(30%)"}} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?chicken" style={{filter: "brightness(30%)"}} alt="Third slide"/>
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
