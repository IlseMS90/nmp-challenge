// import React from 'react'
import React, {useState}  from 'react'
import '../Styles/TableRecluter.css'
import JewelNoFav from "../assets/JoyaGray.png";
import JewelFav from "../assets/Joya.png";
import openModal from './ModalFunction';
import ModalInfoPostulant from './ModalInfoPostulant';

const UserTable = () => {
  
  const [myFav, setMyFav] = useState(true);

  const changeImage = () => {
    // console.log('Si clickeo')
    setMyFav(!myFav)
  } 

  return(
    <table className='tableStyle'>
      <thead>
        <tr>
          <th></th>
          <th>VACANTE</th>
          <th>NOMBRE</th>
          <th>CORREO</th>
          <th>TELÉFONO</th>
          <th>LINK CV</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img alt="favorites" src={myFav ? JewelNoFav : JewelFav} className="favorites" id="addFavorite" 
          onClick={changeImage}
          />
          
          </td>
          <td>Especialista de relaciones laborales</td>
          <td>Ana Martínez</td>
          <td>anamat@hotmail.com</td>
          <td>55 50 20 25 02</td>
          <td>LINK ANA C.V.</td>
          <td>EN EVALUACIÓN</td>
          <td>
            <button className="MyButton" onClick={()=>openModal(ModalInfoPostulant)}>ACTUALIZAR ESTADO</button>
          </td>
        </tr>
      </tbody>
    </table>
)
}

export default UserTable