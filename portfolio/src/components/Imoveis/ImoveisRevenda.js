import React, { useState } from 'react';

function ImoveisRevenda() {
    return(
        <div className='conteudoImovel ImovelRevenda'>
            <div className='esquerdo topoImovel'>
                <div className='tituloImovel'>
                    <h1>Casa em condomínio, com 3 quartos, 2 banheiros e 4 vagas de garagem</h1>
                </div>
                <div className='infomacoesImovel'>
                    <p className='endrecoImovel'>Endereço, rua, num, Bairro do imóvel, cidade do imóvel</p>
                    <div className='comodosImovel'>
                        <div className='quarto'>
                            <p><b>0</b> Quartos</p>
                        </div>
                        <div className='banheiro'>
                            <p><b>0</b> Banheiros</p>
                        </div>
                        <div className='garagem'>
                            <p><b>0</b> Garagens</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='direito boxImagemImovel'>
                <div className='imagemImovel'>
                    <img src='https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </div>
            </div>
            <div className='esquerdo descricaoImovel'>
                <h2 className='titulodescricaoImovel'>Descrição</h2>
                <div className='textoDescricaoImovel'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla volutpat congue. Duis tempus lectus vitae purus scelerisque, ac lobortis est luctus. Morbi diam metus, aliquet eget sollicitudin id, placerat sit amet orci. Sed non ante placerat magna dapibus rutrum tristique semper leo. Ut ex lectus, faucibus sit amet purus eu, vulputate condimentum dui. Duis dolor neque, finibus sit amet cursus nec, ornare vel tellus. Donec eget consequat sem, ac dapibus tellus. Aliquam quis dictum purus. Fusce a enim id metus efficitur facilisis. Curabitur placerat scelerisque nisl, et condimentum nunc volutpat quis. Curabitur turpis velit, condimentum vitae maximus et, convallis eu diam. Curabitur dignissim augue ut ipsum pellentesque euismod. Maecenas ut arcu nec mauris tristique laoreet sit amet ut quam.</p>
                    <p>Donec quis ultricies leo. Pellentesque elementum, tortor quis vehicula fermentum, libero felis finibus eros, non consequat massa elit quis massa. Sed fermentum nunc ac mauris vulputate, at dictum eros viverra. Curabitur sed ipsum molestie, fringilla tortor ornare, dictum elit. Nulla facilisi. Pellentesque maximus risus a ipsum suscipit varius.</p>
                </div>
            </div>
            <div className='direito formImovel'>
                <div className='dentroFormImovel'>
                    <div className='tituloForm'>
                        <h3>Quer ter mais informações sobre o imóvel, mande mensagem agora que entramos em contato</h3>
                    </div>
                    <div>
                        <form>
                            <input type='text' />
                            <input type='email' />
                            <input type='tel' />
                            <div class='checkFormImovel'>
                                <label><input type='checkbox' /> Telefone </label>
                                <label><input type='checkbox' /> Email</label>
                                <label><input type='checkbox' /> Whatsapp</label>
                            </div>
                            <button>Entrar em contato</button>
                        </form>
                    </div>
                    <div className='informacoesCadastro'>
                        <p className='ligarFormContato'>Se preferir mande mensagem no WhatsApp ou ligue (00) 0000-0000, estamos esperando seu contato.</p>
                        <p className='direitosFormContato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla volutpat congue. Duis tempus lectus vitae purus scelerisque, ac lobortis est luctus. Morbi diam metus, aliquet eget sollicitudin id, placerat sit amet orci. Sed non ante placerat magna dapibus rutrum tristique semper leo.</p>
                    </div>
                </div>
            </div>
            <div className='outrosInformacoesImovel'>
                <div className='galeriaImovel'>
                    <div className='blocoGaleriaImovel'>
                        <h2 className='tituloGaleria'>Título Galeria</h2>
                        <img />
                    </div>
                </div>
                <div className='detalhesImoveis'>
                    <h2 className='titulocaractsImoveis'>Detalhes do Imóvel</h2>
                    <div className='itens'>
                        <p className='detalhesImoveis'></p>
                    </div>
                </div>
                <div className='caractsImoveis'>
                    <h2 className='titulocaractsImoveis'>Características do Imóvel</h2>
                    <div className='itens'>
                        <p className='caractImoveis'></p>
                    </div>
                </div>
                <div className='caractsCondominio'>
                    <h2 className='titulocaractsCondominio'>Características do Condomínio</h2>
                    <div className='itens'>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1 + Características 2</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImoveisRevenda;