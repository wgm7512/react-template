import React, { createElement, FunctionComponent, ComponentClass } from "react";
import { Route, Routes } from "react-router-dom";

export interface IRoute {
  key: string,
  path: string,
  extraProps: object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: string | FunctionComponent<any> | ComponentClass<any, any>,
  exact?: boolean,
}

export type IRoutes = IRoute[];


interface IRouterRenderProps {
  routes: IRoutes
}


export default function RouterRender(props: IRouterRenderProps) {
  const { routes } = props;
  return (
    <div>
      <Routes>
        {
          routes.map((item) => (
            <Route
              key={item.key}
              path={item.path}
              element={createElement(item.component, {
                ...item.extraProps
              })}
            />

          ))
        }
      </Routes>
    </div>
  );
}