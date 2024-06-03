import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from ".";

//Com isso o front-end vai saber o TYPE do back-end
export const trpc = createTRPCReact<AppRouter>({});
