import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import api from '../../services/api';

import { Form, Container } from "./styles";

class AddShow extends Component {
  state = {
    shows: "",
    local: "",
    valor: "",
    data: "",
    ingRestante: "",
    estilo: "",
    casa: 125
  };

  handleAddShow = async e => {
    e.preventDefault();
    const { shows, local, valor, data, ingRestante, estilo, casa } = this.state;
    if (!shows || !local || !valor || !data || !ingRestante || !estilo) {
      this.setState({ error: "Preencha todos os dados para cadastrar" });
    } else {
      try {
          console.log(casa);
          console.log("entrou aqui no try");
        await api.post("showrestcontroller", { shows, local, valor, data, ingRestante, estilo, casa });
      } catch (err) {
        console.log(err);
        this.setState({ error: "options?" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleAddShow}>
        {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome do show"
            onChange={e => this.setState({ shows: e.target.value })}
          />
          <input
            type="text"
            placeholder="Local do evento"
            onChange={e => this.setState({ local: e.target.value })}
          />
          <input
            type="text"
            placeholder="Valor"
            onChange={e => this.setState({ valor: e.target.value })}
          />
          <input
            type="date"
            placeholder="Data"
            onChange={e => this.setState({ data: e.target.value })}
          />
          <input
            type="number"
            placeholder="Ingressos disponiveis"
            onChange={e => this.setState({ ingRestante: e.target.value })}
          />
          <input
            type="text"
            placeholder="Estilo: "
            onChange={e => this.setState({ estilo: e.target.value })}
          />
          <button type="submit">Cadastrar evento</button>
          <hr />
        </Form>
      </Container>
    );
  }
}

export default withRouter(AddShow);