import image1 from '/images/cpic3.jpg'
import image2 from '/images/cpic2.jpg'
import image3 from '/images/cpic4.jpg'


export default () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade "data-bs-ride="carousel" >
        <div className="carousel-indicators" >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner active">
          <div className="carousel-item active"  data-bs-interval="2000">
            <img src={image1} className="d-block w-100" alt="..." style={{height:"100%"}} />
          </div>
          <div className="carousel-item"  data-bs-interval="2000">
            <img src={image2} className="d-block w-100" alt="..." style={{height:"100%"}}/>
          </div>
          <div className="carousel-item"  >
            <img src={image3} className="d-block w-100" alt="..." style={{height:"100%"}}/>
          </div>
        </div>
      </div>
    </>
  );
};
