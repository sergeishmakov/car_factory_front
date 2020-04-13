import { useCallback } from 'react';

import { createCarApi, updateCarApi, deleteCarApi } from 'Api/cars';
import { acceptOrderApi, denyOrderApi } from 'Api/orders';
import { createOfferApi } from 'Api/offers';
import { DataContext } from '../../contexts';

export function DataProvider({ cars, orders, children, getCars, getOrders }) {
  const createCar = useCallback(
    async (data) => {
      await createCarApi(data);
      getCars();
    },
    [cars]
  );

  const updateCar = useCallback(
    async (data) => {
      await updateCarApi(data.id, data);
      getCars();
    },
    [cars]
  );

  const deleteCar = useCallback(
    async (id) => {
      await deleteCarApi(id);
      getCars();
    },
    [cars]
  );

  const handleAccept = useCallback(
    async (id) => {
      await acceptOrderApi(id);
      getOrders();
    },
    [cars]
  );

  const handleDeny = useCallback(
    async (id) => {
      await denyOrderApi(id);
      getOrders();
    },
    [cars]
  );

  const handleOffer = useCallback(
    async ({ carId, orderId }) => {
      await createOfferApi({ carId, orderId });
      getOrders();
    },
    [cars]
  );

  return (
    <DataContext.Provider
      value={{
        cars,
        orders,
        createCar,
        updateCar,
        deleteCar,
        onAccept: handleAccept,
        onDeny: handleDeny,
        onOffer: handleOffer,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
