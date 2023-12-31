import React from 'react'

export default function Card() {
  return (
    <div>
        <div>
        <div className="card mt-3" style={{"width": "18rem","maxHeight":"500px"}}>
          <img className="card-img-top" src="https://envato-shoebox-0.imgix.net/1a3a/880f-ed7c-44d2-be90-3af608c9e888/fuji+burger00306.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=6d6e799ee610e4f17cbf3d01ea9a197d" alt=""/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className='container w-100'>
              <select className='m-2 h-100  bg-success rounded'>
                {Array.from(Array(6),(e,i)=>{
                  return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                  )
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option value='half'>Half</option>
                <option value='half'>Full</option>
                
              </select>
              <div className='d-inline h-100 fs-5'>Total price</div>
            </div>
        </div>
      </div>
        </div>
    </div>
  )
}
