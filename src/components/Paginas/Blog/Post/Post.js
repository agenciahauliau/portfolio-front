import React from "react";

import "./Post.scss";

function Post() {
  return (
    <div className="post">
      <div className="container">
        <div className="artigo">
          <div className="topo">
          
            <div className="texto">
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <div className="info">
                <p className="data">publicado em: 12/12/1212</p>
                <p className="tag">tags da publicação</p>
              </div>
              <div className="compartilhar">
              <p>compartilhar: </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u="
                    aria-label="Abrir Facebook Portfolio Imóveis"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    {" "}
                    <svg
                      role="img"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>{" "}
                    </svg>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/intent/tweet?url=+url+&text=+titulo"
                    aria-label="Abrir Twitter Portfolio Imóveis"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    {" "}
                    <svg
                      role="img"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>{" "}
                    </svg>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="whatsapp://send?text=https://dribbble.com/shots/14431436-Startup-Blog-Posts"
                    aria-label="Abrir Twitter Portfolio Imóveis"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    <svg aria-hidden="true" viewBox="-23 -21 682 682.66669">
                      <path
                        d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <div className="imagemDestacada">
            <div className="imagem">
              <div className="img">
                <img src="https://images.pexels.com/photos/4904345/pexels-photo-4904345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
            </div>
          </div>
          </div>

          <div className="conteudo">
            
            <div className="conteudoArtigo">
              <div className="texto">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget nulla vulputate, tristique mauris id, eleifend
                  ex. Vestibulum faucibus dui vel magna sodales ornare.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Duis vulputate molestie
                  dui, sit amet convallis nisi vestibulum et. Fusce vitae dictum
                  sem, quis vehicula nulla. Proin finibus ante eget dolor
                  accumsan condimentum. Nullam a euismod neque, ac molestie
                  nunc. Sed eu aliquam ipsum, in pulvinar massa. Nunc volutpat
                  rutrum augue, et cursus purus venenatis non. Aliquam lobortis
                  placerat elit placerat venenatis.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean elementum mollis nibh ac rutrum. Phasellus lorem nibh,
                  placerat non sem vitae, semper egestas ipsum. Aliquam
                  porttitor enim ac velit luctus, nec tincidunt leo iaculis.
                  Maecenas et metus congue, congue urna vitae, ultrices turpis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus tempus imperdiet neque, gravida vulputate justo
                  imperdiet sed. Maecenas quis eros faucibus, dignissim lorem
                  sed, aliquam massa. Aenean a auctor lectus, id auctor leo.
                </p>

                <p>
                  Aliquam consequat ultricies egestas. Phasellus id odio in
                  augue vestibulum luctus. Morbi eleifend, tellus id feugiat
                  porttitor, ante libero dapibus mauris, vitae venenatis ante
                  leo nec justo. Suspendisse lobortis odio quis aliquet
                  ultricies. Maecenas mollis lorem suscipit enim suscipit
                  convallis. Vestibulum eu erat vel dolor venenatis porta at vel
                  mi. Donec maximus leo nisi, dignissim luctus neque tristique
                  eget. Pellentesque luctus sed nisl vitae dictum. Mauris
                  blandit maximus lacus, nec molestie urna bibendum quis. Aenean
                  at ultricies felis. Donec nec feugiat nisi. Nam efficitur
                  vitae lacus non semper. Donec in risus gravida, posuere elit
                  id, maximus metus.
                </p>

                <p>
                  Duis auctor id elit eget vehicula. Donec eleifend accumsan
                  dolor, vitae placerat felis molestie et. Etiam condimentum
                  quis est nec convallis. Donec non turpis sapien. Quisque
                  interdum dui et auctor iaculis. Cras non consequat dui. Aenean
                  ac tortor velit. Sed et nisi vel mauris fringilla sagittis a
                  in nisl. Nunc egestas venenatis nisi a imperdiet. Proin
                  dignissim ac lacus et tempus. Nullam feugiat dolor velit.
                  Pellentesque non mi ligula. Donec vel fermentum ipsum. Nam
                  tincidunt mauris non nisl efficitur suscipit. Cras ultricies
                  dolor augue, vitae congue leo tincidunt sit amet.
                </p>

                <p>
                  Ut posuere sollicitudin justo non facilisis. Nullam cursus
                  risus bibendum, suscipit leo ac, placerat orci. Vestibulum at
                  mi eu quam vestibulum congue. Cras nunc justo, varius quis
                  nisl quis, dictum vulputate tellus. Phasellus porta
                  condimentum posuere. In hac habitasse platea dictumst. Nullam
                  ut ultrices est. Ut at elementum ex. Aenean tincidunt, nibh in
                  vehicula tristique, nisl diam ullamcorper tortor, sollicitudin
                  cursus elit mi nec nunc. Aliquam nec felis rutrum, consectetur
                  libero nec, tempus lorem. Fusce nisi est, bibendum vitae purus
                  ut, faucibus sodales lorem. Curabitur dictum ornare justo, in
                  tincidunt eros dapibus vel. Nunc euismod neque a lacus
                  vehicula, aliquet rhoncus orci suscipit. Maecenas orci purus,
                  interdum vel neque ut, porttitor fringilla justo. Sed ac
                  aliquam odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;