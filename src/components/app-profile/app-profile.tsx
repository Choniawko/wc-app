import { Component, Prop, h } from "@stencil/core"
import { MatchResults } from "@stencil/router"
import { normalize } from "./utils"

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css",
  shadow: true,
})
export class AppProfile {
  @Prop() match: MatchResults

  render() {
    const { match } = this
    if (match && match.params.name) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {normalize(match.params.name)}. My name was passed
            in through a route param!
          </p>
        </div>
      )
    }
  }
}
