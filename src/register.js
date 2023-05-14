
import React from 'react';

export default function Register() {


  return (
    <div className="d-flex justify-content-center align-items-center bg-warning vh-100 ">
    <div className="bg-white p-3 rounded w-25">
    <form action="">
      <div className='mb-3'>
        <h3>Formulaire d'inscription</h3>
      </div>
      <div className='mb-3'>
        <input type="text" name="firstname" placeholder="Nom d'utilisateur" className='form-control rounded-0'  />
        
      </div>
      <div className='mb-3'>
        <input type="text" name="lastname" placeholder="Prénom" className='form-control rounded-0'  />
        
      </div>
      
      <div className='mb-3'>
        <input type="email" name="email" placeholder="exemple@exemple" className='form-control rounded-0' />
      </div>
      <div className='mb-3'>
        <input type="text" name="phonenumber" placeholder="Téléphone" className='form-control rounded-0'  />
        
      </div>
    
      <div className='mb-3'>
        <button className="btn btn-success w-100 rounded-0">Valider</button>
        <p> Acepez-vous notre politique de confidentialité</p>
        <link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Connexion</link>
      </div>
    </form>
  </div>
  </div>
);
}
