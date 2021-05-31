import { useDialog } from "react-st-modal";
import React, {useState} from "react";
import "./ModalPreSignup.css";
import firebase from "../Firebase/firebase";
import "firebase/firestore";


function ModalPreSingup() {
	const [name, setName] = useState("");
	const [rfc, setRfc] = useState("");
	const [vacant, setVacant] = useState("");
	const [email, setEmail] = useState("");	
  	const dialog = useDialog();
	const status = 'presign';
  const sendInfo = () => {
	const db = firebase.firestore();
  	db.collection("preSignUp").doc().set({name, email, rfc, vacant, status})
  }
  
	 
  return (
    <div className="ps-modalForm-container">
      <div className="ps-titleModal">Registrar Nuevo Candidato</div>
      <form
        className="ps-form"
        onSubmit={(e) => {
          e.preventDefault();
          sendInfo();
		  dialog.close();  
        }}
      >
        <div className="sp-input-container">
          <div className="ps-label-inpuForm">
            Nombre completo
          </div>
          <input 
		  className="ps-form-input"
		  type="text"
            id="psName"
            name="nombre"
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="sp-input-container">
          <div className="ps-label-inpuForm">Correo electrónico</div>
          <input 
		  className="ps-form-input"
		  type="email"
		  id="singUpUser"
		  email=""
		  value={email.email}
		  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="sp-input-container">
          <div className="ps-label-inpuForm">RFC</div>
          <input  
		  className="ps-form-input"
		  type="text"
		  id="psRFC"
		  rfc=""
		  onChange={(e) => setRfc(e.target.value)} />
        </div>
        <div className="sp-input-container">
          <div className="ps-label-inpuForm">Vacante</div>
          <select name="select" className="ps-form-select" onChange={(e) => setVacant(e.target.value)}>
		  <option value="">SELECCIONAR VACANTE</option>
            <option value="BI">BUSSINESS INTELLIGENCE</option>
            <option value="TI">TECNOLOGÍA DE LA INF./SISTEMAS</option>
            <option value="EC">ESTRATEGÍA COMERCIAL</option>
            <option value="OPP">OPERACIÓN PRENDARIA</option>
            <option value="SEG">SERVICIOS GENERALES</option>
            <option value="CPR">CONTROL PRESUPUESTAL</option>
            <option value="AUD">AUDITORÍA</option>
            <option value="PRD">PRODUCTOS</option>
            <option value="PFI">PLANEACIÓN FINANCIERA</option>
          </select>
        </div>
        <button className="ps-submit-button">REGISTRAR NUEVO CANDIDATO</button>
      </form>
    </div>
  );
}

export default ModalPreSingup;
