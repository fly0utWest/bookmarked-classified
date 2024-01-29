import React from "react";
import ListElement from "./__element/ListElement";
import Poster from "./__element/Poster";
import bojack from "../bojack.webp";
import queensGambit from "../queens-gambit.webp";
import insideBo from "../insideBo.jpg";
import scottTakesOff from "../scott-pilgrim-takes-off.webp";
import strangerThings from "../stranger-things.webp";
import dogville from "../dogville.webp";
import houseThatJackBuilt from "../house-that-jack-built.webp";
import melancholy from "../melancholy.webp";
import antichrist from "../antichrist.webp";
import dancerInTheDark from "../dancer-in-the-dark.webp";

const PopularListsThisMonthGrid = () => {
  const posterList1: Array<React.ReactNode> = [
    <Poster src={bojack} alt="Конь БоДжек" />,
    <Poster src={queensGambit} alt="Ход королевы" />,
    <Poster src={insideBo} alt="Дома" />,
    <Poster src={scottTakesOff} alt="Скотт Пилигрим жмёт на газ" />,
    <Poster src={strangerThings} alt="Очень странные дела" />,
  ];

  const posterList2: Array<React.ReactNode> = [
    <Poster src={dogville} alt="Догвилль" />,
    <Poster src={houseThatJackBuilt} alt="Дом, который построил Джек" />,
    <Poster src={melancholy} alt="Меланхолмя" />,
    <Poster src={antichrist} alt="Антихрист" />,
    <Poster src={dancerInTheDark} alt="Танцующая в темноте" />,
  ];

  return (
    <div className="popular-month-lists-grid">
      <ListElement posterList={posterList1} heading="Топ-10 сериалов Netflix" />
      <ListElement
        posterList={posterList1}
        heading="Триер и его лучшие работы"
      />
      <ListElement
        posterList={posterList1}
        heading="Триер и его лучшие работы"
      />
    </div>
  );
};

export default PopularListsThisMonthGrid;
