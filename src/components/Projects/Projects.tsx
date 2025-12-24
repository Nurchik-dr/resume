import 'bootstrap/dist/css/bootstrap.min.css';
import "./Projects.css";
import myTravelPosts from '../assets/my-travel-posts.png';
import countryInformation from '../assets/countryinformation.png'

const cards = [
  {
    img: myTravelPosts,
    title: "My Travel Posts",
    link: "https://nurchik-dr.github.io/my-travel-posts/",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
  },
  {
    img: countryInformation,
    title: "Country information",
    link: "https://github.com/Nurchik-dr/controlwork",
    description: "Description for another project goes here.",
  },
];

const Contacts = () => {
  return (
    <div>
      {cards.map((card, index) => (
        <div className="card mb-3" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <a href={card.link} target="_blank">
                <img src={card.img} className="img-fluid" alt={card.title} />
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href={card.link} target="_blank" rel="noopener noreferrer" className='card-title'>{card.title}<i className="bi bi-box-arrow-up-right"></i></a>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <hr />
      <div className="text-center">
        <a href="https://github.com/Nurchik-dr?tab=repositories" className="btn btn-link" target='_blank'>All projects <i className="bi bi-arrow-down"></i></a>
      </div>
    </div>
  );
}

export default Contacts;
