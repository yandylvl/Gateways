import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {
  addGateway,
  getGatewaysByPeripheralsCount,
} from "../store/modules/entities/gateways";
import configStore from "../store/configureStore";

describe("gatewaysSlice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configStore();
  });

  const gatewaysSlice = () => store.getState().entities.gateways;

  const createState = () => ({
    entities: {
      gateways: {
        list: [],
      },
    },
  });

  it("should add the gateway to the store if it's saved to the server", async () => {
    const gateway = { serialNumber: "a" };
    const savedGateway = { ...gateway, id: 1 };
    fakeAxios.onPost("/gateways").reply(200, savedGateway);

    await store.dispatch(addGateway(gateway));

    expect(gatewaysSlice().list).toContainEqual(savedGateway);
  });

  it("should not add the gateway to the store if it's not saved to the server", async () => {
    const gateway = { serialNumber: "a" };
    fakeAxios.onPost("/gateways").reply(500);

    await store.dispatch(addGateway(gateway));

    expect(gatewaysSlice().list).toHaveLength(0);
  });

  describe("selectors", () => {
    describe("getGatewaysByPeripheralsCount", () => {
      it("should filter gateways by peripherals", () => {
        const state = createState();
        state.entities.gateways.list = [
          { peripherals: [1, 2, 3] },
          { peripherals: [1, 2, 3] },
          { peripherals: [3] },
          { peripherals: [1] },
          { peripherals: [2] },
          { peripherals: [] },
        ];

        const result = getGatewaysByPeripheralsCount(1)(state);

        expect(result).toHaveLength(3);
      });

      it("should return entire list if no filter is passed", () => {
        const state = createState();
        state.entities.gateways.list = [
          { peripherals: [1, 2, 3] },
          { peripherals: [1, 2, 3] },
          { peripherals: [3] },
          { peripherals: [1] },
          { peripherals: [2] },
          { peripherals: [] },
        ];

        const result = getGatewaysByPeripheralsCount()(state);

        expect(result).toHaveLength(0);
      });
    });
  });
});
