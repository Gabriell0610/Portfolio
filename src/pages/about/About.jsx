/* eslint-disable no-unused-vars */
import React from "react";
import MenuComponent from "../../components/MenuComponent";
import "../../styles/components/about-component.scss";

const About = () => {
  return (
    <div>
      <MenuComponent />
      <main className="content-main">
        <h1 className="title-description">Desenvolvedor Web</h1>
        <section className="container-about mt-5">
          <div className="description-about">
            <h2 className="title-section">Sobre Mim</h2>
            <p className="description mt-2">
              Olá a todos, me chamo Gabriel Barbosa, tenho 19 anos e sou de
              Niterói, Rio de Janeiro. Minha paixão por tecnologia começou desde
              cedo. Aos 9 anos, ganhei meu primeiro notebook e, desde então, não
              larguei mais essa vida em frente às telas. Hoje estudo programação
              e curso Sistemas de Informação. No momento, trabalho na
              Universidade de Vassouras, em Maricá, RJ.
            </p>
            <button className="mt-4">Download Currículo</button>
          </div>
          <div className="image-about">
            <img src="src\assets\img\eu-perfil.jpg.jpg" alt="" />
            <div className="image-desc">
              <img
                className="mt-3"
                src="src\assets\img\image-portfolio.jpg"
                alt=""
              />
              <p>Icaraí/Niterói</p>
            </div>
          </div>
        </section>
        <section className="container-courses">
          <h2 className="title-section">Educação</h2>
          <div className="course mt-3">
            <h2>Universidade Estácio de Sá</h2>
            <p className="mt-1">
              Bacharelado em Sistema de Informação - Atualmente no 4° semestre
            </p>
            <button className="mt-2">Acessar CR</button>
          </div>
          <div className="course mt-3">
            <h2>Oracle Next Education</h2>
            <p className="mt-1">
              Curso com foco em desenvolvimento backend - Java + SpringBoot +
              Banco de Dados
            </p>
            <button className="mt-2">Acessar Certificado</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
