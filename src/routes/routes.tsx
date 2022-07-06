import { Route, Routes as RoutesList } from 'react-router-dom';
import { TablesPage } from '../pages/Table';

import { StarterPage } from '../pages/Starter';

export function Routes() {
  return (
    <RoutesList>
      <Route path="/" element={<StarterPage />} />
      <Route path="/tables" element={<TablesPage />} />
    </RoutesList>
  );
}
