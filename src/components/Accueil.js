import React from "react";
import img1 from "../assets/img/down.jpg";
import img2 from "../assets/img/photo.svg";
import img3 from "../assets/img/code.svg";
import img4 from "../assets/img/voyage.svg";
import img5 from "../assets/img/git.jpg";
import img6 from "../assets/img/sea.jpg";

const Accueil = () => {
  return (
    <div>
      <div className="BgHome">
        <h1 className="textHome">Bienvenue sur mon premier site sous react</h1>
      </div>
      <h2 className="text-center mt-3">A propos de moi </h2>
      <p className="text-start about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea
        rerum hic, pariatur aliquid animi voluptatibus dolore modi sit laborum
        eius praesentium laboriosam, distinctio minus possimus? Provident neque
        vero voluptatibus facilis eos reprehenderit nihil voluptatem, dicta
        deleniti? Ipsa laborum libero laboriosam minima corporis at adipisci
        quasi, corrupti doloremque eaque nisi id possimus, optio aut ipsam in
        fugiat voluptatibus. Accusantium velit ad nobis, laboriosam inventore
        aspernatur quod explicabo pariatur laborum libero, iste perferendis
        impedit vel nesciunt. Dolorum cum atque, blanditiis perspiciatis natus
        quae, officia incidunt ad a impedit quod libero similique corrupti nulla
        dicta dolore voluptatem, minus numquam. Repudiandae eveniet possimus rem
        eum necessitatibus dolorem hic dignissimos sunt, facilis dolorum
        adipisci itaque odit nisi delectus illum tempora illo eligendi, impedit
        velit sit aliquam totam? Accusamus iste voluptas exercitationem,
        consequatur nobis, eos illum fugit praesentium rem iusto neque molestias
        magnam harum deleniti nulla eum odit provident, omnis nesciunt
        cupiditate excepturi? Mollitia commodi qui quod architecto porro!
        Quibusdam veritatis eius iusto ad enim accusantium totam autem suscipit
        repudiandae corrupti iste cum blanditiis expedita quae dicta ducimus,
        nulla culpa ipsa maxime ab voluptate beatae fuga! Saepe adipisci sequi
        eveniet error consequuntur! Rem quo, natus temporibus harum omnis dicta
        sed! Quidem, incidunt explicabo fugit perferendis adipisci nobis.
        Possimus cum fugit, explicabo ipsa consequatur necessitatibus pariatur
        sapiente tempore aut nobis distinctio sed optio. Minus voluptas ratione
        dignissimos quidem perspiciatis voluptatibus praesentium officiis quasi
        magni cumque provident, porro amet voluptates veritatis ut, laboriosam
        quam accusamus velit et incidunt impedit debitis? Eaque libero labore
        eum obcaecati. Doloribus libero, assumenda ullam ut totam, nobis minima
        quos quod, distinctio molestias nihil hic. Minima, sed quibusdam minus
        asperiores veritatis expedita doloribus totam voluptatibus placeat,
        consectetur id, recusandae quod fugiat sunt omnis atque hic labore
        maiores laudantium laboriosam iste ab. Et impedit, nulla eaque
        perferendis harum dolore aperiam dolor obcaecati voluptatem, unde sint
        modi esse repellat expedita rerum? Dolores, obcaecati id, laboriosam
        exercitationem unde odit perspiciatis facilis esse quisquam odio
        officiis fugit, accusamus illum at vitae? Cum suscipit veritatis
        consequatur voluptates provident sequi. Nostrum dolores obcaecati magni
        quam, distinctio in, culpa natus consectetur sint earum, fugit eos
        consequuntur impedit. Suscipit corporis, ullam nesciunt ea, optio enim
        veniam, a adipisci eaque doloribus sequi quis quisquam necessitatibus
        possimus eius? Reiciendis distinctio sunt exercitationem doloribus nobis
        et error sed voluptatibus quis molestias corrupti facilis impedit, velit
        minima sint consectetur modi tempore praesentium optio ad corporis
        magni! Esse alias odit amet ab aspernatur, molestias sapiente
        perspiciatis assumenda veniam? Provident molestias qui, neque nisi minus
        exercitationem hic ducimus magnam nostrum praesentium sed eum, laborum
        nihil perspiciatis, odit blanditiis dolor! Architecto nesciunt, harum
        quaerat voluptas voluptatem deserunt quos illum consequatur doloribus,
        modi minima debitis nostrum accusamus voluptatum sequi adipisci ipsa hic
        repellat rerum sunt veniam. Quas minima, quam tempora accusamus, quos
        ducimus, repellendus architecto distinctio laboriosam possimus
        reiciendis iure? Id explicabo magni beatae laudantium, in dolor maxime
        expedita consequatur reprehenderit eum non eos modi velit qui ratione
        recusandae, cumque dolore distinctio earum voluptates deleniti! Quis
        sunt ea esse perferendis eos illo hic est! Quo quidem harum tenetur
        consequatur?
      </p>
      <h2 className="text-center">Mes activités</h2>
      <ul className="cards">
        <li>
          <a
            href="https://500px.com/p/denisdevillers?view=photos"
            target="_blank"
            className="card"
          >
            <img src={img1} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <img className="card__thumb" src={img2} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">La photographie</h3>
                  <span className="card__status">12 ans d'expériences</span>
                </div>
              </div>
              <p className="card__description">
                Passionné de photo depuis plus de 10 ans, j'ai eu la chance de
                rencontrer des personnes génial et découvrir des endroits
                magnifique à travers le monde.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://github.com/Thp77" target="_blank" className="card">
            <img src={img5} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <img className="card__thumb" src={img3} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">La programmation</h3>
                  <span className="card__status">2 ans d'expériences</span>
                </div>
              </div>
              <p className="card__description">
                J'ai commencé ce beau métier, avec une formation chez Webforce 3
                en février 2021. J'ai ensuite fait un stage, de 3 mois chez
                Adnprog. Une belle socièté à taille humaine, chez qui j'ai
                appris à être totalement autonome. J'ai principalement fait du
                Wp sous elementor et quelques fonction en php pour des
                particuliers, comme la création d'un sommelier en ligne ou
                encore un gestionnaire de bien immobilier.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/denisdevillersphotography"
            target="_blank"
            className="card"
          >
            <img src={img6} className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <img className="card__thumb" src={img4} alt="" />
                <div className="card__header-text">
                  <h3 className="card__title">Les voyages</h3>
                  <span className="card__status">
                    Un monde sans frontière c'est le rêve !
                  </span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
      {/* cercle de language */}
      <h2 className="text-center mt-3">Mes compétences</h2>
      <div class="container">
        <div class="container__progressbars">
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-html shadow-html"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__text shadow-html">Html</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-css shadow-css"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__text shadow-css">Css</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-js shadow-js"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__text shadow-js">Javascript</span>
          </div>

          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-react shadow-react"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__text shadow-react">React</span>
          </div>
          <div class="progressbar">
            <svg class="progressbar__svg">
              <circle
                cx="80"
                cy="80"
                r="70"
                class="progressbar__svg-circle circle-scss shadow-scss"
              >
                {" "}
              </circle>
            </svg>
            <span class="progressbar__text shadow-scss">Scss</span>
          </div>
        </div>
      </div>
      <div id="main-container-social" class="main-container-social"></div>
    </div>
  );
};

export default Accueil;
