
import ReactDOM from 'react-dom/client';
import './index.css';
import one from './assests/images/one.jpg'
import two from './assests/images/two.jpg'
import three from './assests/images/three.jpg'
import four from './assests/images/four.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));

function Imagebox(props) {
  return (

    <div style={{ width: "250px", height: "300px", border: "solid black 1px", padding: "10px", margin: "10px" }}>
      <div style={{ width: "250px", height: "250px" }}>
        <img src={props.src} alt="imhg" style={{ width: "100%", height: "100%" }}></img>
      </div>
      <h3 style={{ textAlign: "center" }}>{props.name}</h3>
    </div>

  )
}


const arr = [
  {
    img: one,
    name: "Evening cup of Tea"
  },
  {
    img: two,
    name: "Peacefully relaxing"
  },
  {
    img: three,
    name: "cozy climate"
  },
  {
    img: four,
    name: "Forest full of flowers"
  },
  {
    img: four,
    name: "Forest full of flowers"
  },
  {
    img: one,
    name: "Evening cup of Tea"
  },
  {
    img: two,
    name: "Peacefully relaxing"
  },
  {
    img: three,
    name: "cozy climate"
  }
]

function Render() {
  return (
    arr.map(function (items) {
      return (<div>
        <Imagebox src={(items.img)} name={items.name} ></Imagebox>
      </div>)
    }))
}
root.render(
  <div style={{ backgroundColor: "rbga(250,250,250,0.8)", width: "1200px", height: "800px", border: "solid black 1px", padding: "10px", margin: "10px", display: "flex", flexWrap: "wrap" }}>

    <Render></Render>
  </div>
);

//  return(<div>
//   <SearchBox name={items.name} update={items.update} ></SearchBox>
// </div>)