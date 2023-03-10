import React from "react";
import { useForm } from "react-hook-form";

const Formulaire = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nom :</label>
          <input
            type="text"
            autoComplete="none"
            {...register("Nom", { required: true, minLength: 1 })}
          />
          {errors.Nom && <p>Entrer votre nom avec un min de une lettre</p>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="10"
            cols="50"
            autoComplete="none"
            {...register("Message", { required: true })}
          />
          {errors.Message && <p>Entrer votre Message</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            autoComplete="none"
            {...register("Email", {
              required: true,
            })}
          />
          {errors.Email && <p>Votre Email dois contenir @</p>}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;
