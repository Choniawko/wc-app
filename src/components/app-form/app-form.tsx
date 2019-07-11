import { Component, State, h } from "@stencil/core"

interface IForm {
  username: string
  email: string
}

@Component({
  tag: "app-form",
})
export class Form {
  @State() stateForm: IForm = { username: "", email: "" }

  handleChange(e) {
    this.stateForm = {
      ...this.stateForm,
      [e.target.name]: e.target.value,
    }
  }
  render() {
    return (
      <form>
        <div>
          <input
            type="input"
            name="username"
            value={this.stateForm.username}
            onInput={this.handleChange}
          />
        </div>
        <div>
          <input
            type="input"
            name="email"
            value={this.stateForm.email}
            onInput={this.handleChange}
          />
        </div>
      </form>
    )
  }
}
