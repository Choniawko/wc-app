import { FunctionalComponent, h } from "@stencil/core"

interface AppRouterProps {}

export const AppRouter: FunctionalComponent<AppRouterProps> = () => (
  <stencil-router>
    <stencil-route-switch scrollTopOffset={0}>
      <stencil-route url="/" component="app-home" exact={true} />
      <stencil-route url="/profile/:name" component="app-profile" />
      <stencil-route url="/form" component="app-form" exact={true} />
    </stencil-route-switch>
  </stencil-router>
)
