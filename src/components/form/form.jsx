import React from 'react';
import './form.scss';

const Form = () => {
    return (
        <div className="form content-wrap--movil">
            <form className="form-contain">
                <legend>Déjanos tus datos</legend>
                <div className="form-contain_step">
                    <select name="" id="">
                        <option value="">DNI</option>
                        <option value="">CE</option>
                    </select>
                    <label htmlFor="">
                        <input type="number" placeholder="Nro. de doc" />
                    </label>
                </div>
                <div className="form-contain_step">
                    <label htmlFor="">
                        <input type="number" placeholder="Celular"/>
                    </label>
                </div>
                <div className="form-contain_step">
                    <label htmlFor="">
                        <input type="text" placeholder="Placa"/>
                    </label>
                </div>
                <label htmlFor="">
                <input type="checkbox" name="" id="" />
                Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
                    
                </label>
                <div className="form-contain_submit">
                    <button type="submit">Cotízalo</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
