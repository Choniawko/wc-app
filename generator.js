const fs = require("fs")
const path = require("path")

fs.readFile("config.json", async (err, data) => {
	try {
		const __dirname = path.resolve()
		const dir = `${__dirname}/src/components/app-form`
		const { fields } = JSON.parse(data)
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir)
		}
		fs.writeFileSync(
			`${dir}/app-form.tsx`,
			`
			import { Component, State, h } from '@stencil/core'

			interface IForm {
				${fields.map(({ dataType, name }) => `${name}: ${dataType}`).join("\n")}
			}

			@Component({
				tag: "app-form",
			})
			export class Form {
				@State() stateForm: IForm = ${JSON.stringify(
					fields.reduce(
						(acc, curr) => ({
							...acc,
							[curr.name]: "",
						}),
						{},
					),
				)}

				handleChange(e) {
					this.stateForm = {
						...this.stateForm,
						[e.target.name]: e.target.value,
					}
				}
				render() {
					return (
						<form>
							${fields
								.map(
									({ type, name }) =>
										`<div>
											<input 
													type=${JSON.stringify(type)}
													name=${JSON.stringify(name)}
													value={this.stateForm.${name}}
													onInput={this.handleChange}
												/>
									 </div>`,
								)
								.join("")}
						</form>
					)
				}
			}
		`,
		)
	} catch {
		console.log({ err })
	}
})
