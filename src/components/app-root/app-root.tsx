import { Component, h } from "@stencil/core"
import { Header } from "./Header"
import { AppRouter } from "./AppRouter"

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
    )
  }
}
