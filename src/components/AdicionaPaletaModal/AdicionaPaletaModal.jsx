import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import './AdicionaPaletaModal.css';

function AdicionaPaletaModal({closeModal}){
    const form = {
        preco:"",
        sabor:"",
        recheio:"",
        descricao:"",
        foto:"",
    }
    const [state, setState] = useState(form);

    const handleChange = (e, name) => {
        setState({...state, [name]: e.target.value})

    }
    return(
        <Modal closeModal ={closeModal}>
            <div className="AdicionaPaletaModal">
                <form autoComplete ="false">
                    <h2>Adicionar ao Cardápio</h2>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="preco">Preço:</label>
                        <input 
                        id="preco" 
                        type="text" 
                        placeholder='R$ 10,00'
                        value={state.preco}
                        onChange={(e) => handleChange(e, "preco")}/>
                    </div>
                    <div>
                    <label className="AdicionaPaletaModal__text" htmlFor="sabor">Sabor:</label>
                        <input 
                        id="sabor" 
                        type="text" 
                        placeholder='Chocolate'
                        value={state.sabor}
                        onChange={(e) => handleChange(e, "sabor")}/>
                    </div>
                    <div>
                    <label className="AdicionaPaletaModal__text" htmlFor="recheio">Recheio:</label>
                        <input 
                        id="recheio" 
                        type="text" 
                        placeholder='banana'
                        value={state.recheio}
                        onChange={(e) => handleChange(e, "recheio")}/>
                    </div>
                    <div>
                    <label className="AdicionaPaletaModal__text" htmlFor="descricao">Descrição:</label>
                        <input 
                        id="descricao" 
                        type="text" 
                        placeholder='Detalho o produto'
                        value={state.descricao}
                        onChange={(e) => handleChange(e, "descricao")}/>
                    </div>
                    <div>
                    <label className="AdicionaPaletaModal__text AdicionaPAletaModal__foto-label" htmlFor="foto">
                    {!state.foto.length ? "Selecionar Imagem":state.foto}
                    </label>
                        <input
                        className="AdicionaPaletaModal__foto" 
                        id="foto" 
                        type="file"
                        accept='image/png, image/gif, image/jpeg' 
                        value={state.foto}
                        onChange={(e) => handleChange(e, "foto")}/>
                    </div>
                    <input
                    className="AdicionaPaletaModal__enviar"
                    type="submit"
                    value="Enviar"/>
                </form>
            </div>

        </Modal>
    );
}

export default AdicionaPaletaModal;
