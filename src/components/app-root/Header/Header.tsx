import { FunctionalComponent, h } from "@stencil/core"

interface HeaderProps {}

export const Header: FunctionalComponent<HeaderProps> = () => (
  <header>
    <h1>Stencil App Starter</h1>
  </header>
)
