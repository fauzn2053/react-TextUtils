import React from 'react'
import { useState } from 'react'


export default function About() {
  const [btnText, setBtnText] = useState("Dark mode is disabled")
  const [textStyle, setTextStyle] = useState(
    {
      color: "black",
      backgroundColor: "white"
    }
  )
  const toggleClick = () => {
    if (textStyle.color === 'white') {
      setTextStyle(
        {
          color: "black",
          backgroundColor: "white"
        }
      )
      setBtnText("Dark mode is disabled")
    }
    else {
      setTextStyle(
        {
          color: "white",
          backgroundColor: "black"
        }
      )
      setBtnText("Dark mode is enabled")
    }
  }
  return (
    <div className="container my-5" style={textStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample"  >
        <div className="card" style={textStyle}>
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-dark" style={textStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body" style={textStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={textStyle}>
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button style={textStyle} className="btn btn-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body" style={textStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={textStyle}>
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button style={textStyle} className="btn btn-dark collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body" style={textStyle}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-4 mb-auto'>
        <button type="button" className="btn btn-primary" onClick={toggleClick}> {btnText}</button>
      </div>
    </div>
  )
}