import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
// Define outside the load function so the adapter can be cached
const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password:z.string().min(8)
});

export const load = async () => {
  const form = await superValidate(zod(schema));

  // Always return { form } in load functions
  return { form };
};
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));

    if (!form.valid) {
      // Again, return { form } and things will just work.
      return fail(400, { form });
    }
console.log(form);

    // TODO: Do something with the validated form.data

    // Display a success status message
    return message(form, 'Form posted successfully!');
  }
};