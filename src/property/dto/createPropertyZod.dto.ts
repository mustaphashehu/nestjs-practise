import { z } from "zod";

export const createPropertySchema = z
    .object({
        name: z.string().min(3, {message: "must be more than 3"}),
        description: z.string(),
        price: z.number().positive()

    })
    .required();

    export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>

