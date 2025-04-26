import './App.css';

function Main() {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <div>
            <h1>30% off this weekend</h1>
          </div>
          <div>
            <p>Delicious Bites, Unbeatable Prices! Order Now!</p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <img src="download.jpg" alt="Tech" />
          <p>Menu 1</p>
        </div>
        <div className="column">
          <img src="download (1).jpg" alt="Business" />
          <p>Menu 2</p>
        </div>
        <div className="column">
          <img src="istockphoto-1457433817-612x612.jpg" alt="Teamwork" />
          <p>Menu 3</p>
        </div>
      </div>
    </>
  );
}

export default Main;
