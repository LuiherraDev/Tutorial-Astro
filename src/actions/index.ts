import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';

export const server = {
  newClient: defineAction({
    accept: 'form',
    input: z.object({
      nombre: z.string().min(3),
      email: z.email(),
      descripcion: z.string(),
    }),
    handler: async ({ nombre, email, descripcion }) => {
      console.log("Estoy dentro del newClient")
      console.log({ nombre });
      console.log({ email });
      console.log({ descripcion });

      return {
        success: true,
      };
    },
  })
}
