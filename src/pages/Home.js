import React from "react";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Title from "../components/Title";
import {Link} from 'react-router-dom'
import BannerPokeSalmao from "../assets/bannerPokeSalmao.png";
import BannerPokeVegano from "../assets/bannerPokeVegano.png";
import BannerNigiri from "../assets/bannerNigiri.png";
import BannerRoll from "../assets/bannerRoll.png";
import NutritionalTable from "../components/NutritionalTable";

const Home = () => {
  
  const sliderItens = [
    
    <Link to="pratos">
      <Banner
        name='Poke de salmão'
        title={<Title text='Poke de salmão' />}
        button={<Button text='Saiba mais' />}
        img={BannerPokeSalmao}
        nutritionalTable={
          <NutritionalTable
            cals='405'
            gord='7,6g'
            carbs='70g'
            prot='14g'
            ingredients='Ingredientes: Cubos de salmão, gohan, sunomono, cebola roxa, cebolinha, nori, gergilim e crispy de batata doce.'
          />
        }
        desc='A combinação perfeita entre sabor e nutrientes. Só de pensar já dá água na boca, não é?'
      />
    </Link>,

    <Link to="pratos">
      <Banner
        name='Poke vegano'
        title={<Title text='Poke vegano' />}
        button={<Button text='Saiba mais' />}
        img={BannerPokeVegano}
        nutritionalTable={
          <NutritionalTable
            cals='319'
            gord='4,3g'
            carbs='59g'
            prot='4g'
            ingredients='Ingredientes: Gohan, sunomono, abacate e mix de folhas.'
          />
        }
        desc='A combinação perfeita entre sabor e nutrientes. Só de pensar já dá água na boca, não é?'
      />
    </Link>,

    <Link to="pratos">
      <Banner
        name='Nigiri de Salmão'
        title={<Title text='Nigiri de Salmão' />}
        button={<Button text='Saiba mais' />}
        img={BannerNigiri}
        flexStart={{alignSelf: 'flex-start'}}
        nutritionalTable={
          <NutritionalTable
            cals='75,4'
            gord='2,3g'
            carbs='8g'
            prot='5,23g'
            ingredients='Ingredientes: Nigiri de salmão flambado, spice mayo, molho teriyaki e gergelim.'
          />
        }
        desc='A combinação perfeita entre sabor e nutrientes. Só de pensar já dá água na boca, não é?'
      />
    </Link>,

    <Link to="pratos">
      <Banner
        name='Roll de Salmão'
        title={<Title text='Roll de Salmão' />}
        button={<Button text='Saiba mais' />}
        img={BannerRoll}
        nutritionalTable={
          <NutritionalTable
            cals='62'
            gord='4g'
            carbs='10g'
            prot='9g'
            ingredients='Ingredientes: Enrolado de salmão, gohan, cream cheese, molho tarê e cebolinha.'
          />
        }
        desc='A combinação perfeita entre sabor e nutrientes. Só de pensar já dá água na boca, não é?'
        />
    </Link>
  ];

  return (
    <main className={styles.main}>
      <Slider
        sliderItens={sliderItens.map((item, index) => (
          <div
            key={index}
            style={{ width: "100%", display: "flex", flexShrink: "0"}}
          >
            {item}
          </div>
        ))}
      ></Slider>
    </main>
  );
};

export default Home;
