// import logo from './logo.svg';
import React from 'react';
// import Login from './Login';

export default function Login() {


  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="bg-white p-3 rounded w-25">
      <form action="">
        <div className='mb-3'>
          <h3>Formulaire de connexion</h3>
        </div>
        <div className='mb-3'>
          <input type="text" name="firstname" placeholder="Nom d'utilisateur" className='form-control rounded-0'  />
          
        </div>
        
        <div className='mb-3'>
          <input type="email" name="email" placeholder="exemple@exemple" className='form-control rounded-0' />
        </div>
      
        <div className='mb-3'>
          <button className="btn btn-success w-100 rounded-0">Valider</button>
          <p> Acepez-vous notre politique de confidentialité ?</p> 
           <button to="{register}" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">inscrivez-vous ici donc !</button>
         {/*  <p> Acepez-vous notre politique de confidentialité ?<br/>
          <span className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> </span>
          <link to='/register'> s'inscrire</link>
          </p> */}
        </div>
      </form>
    </div>
    </div>
  );
}