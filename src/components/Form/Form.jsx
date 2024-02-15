import styles from "./Form.module.css";
import PropTypes from "prop-types";
import { TextInput } from "../TextInput";
import { Selector } from "../Selector";
import { Button } from "../Button";
import { useState } from "react";
const Form = ({ teams, onFormSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      role.length === 0 ||
      imageURL === 0 ||
      team === ""
    ) {
      return;
    }
    onFormSubmit({ name, role, imageURL, team });
    setTeam("");
    setImageURL("");
    setRole("");
    setName("");
  };

  return (
    <section className={styles["c-formulario"]}>
      <form onSubmit={handleSubmit} className={styles["c-formulario__form"]}>
        <h2 className={styles["c-formulario__title"]}>
          Preencha os dados para criar o card:
        </h2>
        <TextInput
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          handleChangeValue={(e) => {
            setName(e.currentTarget.value);
          }}
        />
        <TextInput
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          handleChangeValue={(e) => {
            setRole(e.currentTarget.value);
          }}
        />
        <TextInput
          label="Imagem"
          type="url"
          placeholder="Digite o endereço da imagem"
          value={imageURL}
          handleChangeValue={(e) => {
            setImageURL(e.currentTarget.value);
          }}
        />
        <Selector
          label="Times"
          itens={teams}
          selected={team}
          handleChangeValue={(e) => {
            setTeam(e.currentTarget.value);
          }}
        />
        <Button type={"submit"}>Criar card</Button>
      </form>
    </section>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Form };
