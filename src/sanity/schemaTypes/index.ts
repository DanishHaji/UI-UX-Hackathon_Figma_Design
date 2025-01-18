import { type SchemaTypeDefinition } from 'sanity';
import cars from "./cars"
import userOrder from "./userOrder";
import shipment from "./shipment";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars,userOrder,shipment],
}
