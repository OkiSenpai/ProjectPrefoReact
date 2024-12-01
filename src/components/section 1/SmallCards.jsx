import svetaImage from "../../assets/photo/SvetaNekad.jpg";
import markoNekad from "../../assets/photo/MarkoNekad.jpg";
import sebaNekad from "../../assets/photo/seba1.webp";

export default function MySmallCards() {
  const developers = [
    {
      id: 1,
      name: "Svetislav Marijanovic",
      url: svetaImage,
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim id debitis provident culpa earum recusandae esse cupiditate omnisrepellendus doloribus non eius officiis doloremque, impedit reiciendisiure totam magnam!",
    },
    {
      id: 2,
      name: "Marko Vucic",
      url: markoNekad,
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim id debitis provident culpa earum recusandae esse cupiditate omnisrepellendus doloribus non eius officiis doloremque, impedit reiciendisiure totam magnam!",
    },
    {
      id: 3,
      name: "Sebastian Herrera",
      url: sebaNekad,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim id debitis provident culpa earum recusandae esse cupiditate omnisrepellendus doloribus non eius officiis doloremque, impedit reiciendisiure totam magnam!",
    },
  ];

  return (
    <>
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
    </>
  );
}
