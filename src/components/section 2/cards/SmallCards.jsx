export default function RenderSmallCards(props) {
  const developers = props.developers;

  return (
    <div className="cardContainer">
      {developers.map((developer) => (
        <div id="card-1" className="card">
          <img src={developer.url} alt={developer.name} />
          <h3>{developer.name}</h3>
          <h4>
            Java/Javascript Tech Lead & Department manager at Levi9 Technology
            Services
          </h4>
          <p>{developer.description}</p>
        </div>
      ))}
    </div>
  );
}
