import { Route, Routes as RoutesList } from 'react-router-dom';

import { StarterPage } from '../pages/Starter';

export function Routes() {
  return (
    <RoutesList>
      <Route path="/" element={<StarterPage />} />
    </RoutesList>
  );
}
