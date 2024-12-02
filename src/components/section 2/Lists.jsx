import svetaImage from "../../assets/photo/SvetaNekad.jpg";
import markoNekad from "../../assets/photo/MarkoNekad.jpg";
import sebaNekad from "../../assets/photo/seba1.webp";
import RenderSmallCards from "./cards/SmallCards";

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
      <RenderSmallCards developers={developers} />
    </>
  );
}
