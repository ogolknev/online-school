<script setup lang="ts">
import type { FormError } from "@nuxt/ui";
import zod from "zod";
import { useAPI } from "~/services";

const toasts = useToast();
const router = useRouter()

const schema = zod.object({
  identifier: zod.string(),
  password: zod.string(),
});

type Schema = zod.output<typeof schema>;
type State = Partial<Schema>;

const state = ref<State>({
  identifier: undefined,
  password: undefined,
});

const validate = (state: State): FormError[] => {
  const errors: FormError[] = [];

  if (!state.identifier)
    errors.push({ name: "identifier", message: "Обязательное поле" });
  if (!state.password)
    errors.push({ name: "password", message: "Обязательное поле" });

  return errors;
};

async function submit() {
  try {
    await useAPI().login({
      identifier: state.value.identifier!,
      password: state.value.password!,
    });

    router.push('/')

  } catch (err) {
    console.error(err);

    let description: string | undefined

    if (typeof err === 'string') description = err
    else if (err instanceof Error) description = err.message

    toasts.add({
      title: "Попытка входа провалилась",
      color: "error",
      description
    });
  }
}
</script>

<template>
  <UForm :schema :state :validate @submit="submit">
    <UFormField
      label="Имя пользователя или Email"
      name="identifier"
      class="mb-2">
      <UInput
        v-model="state.identifier"
        class="w-full"
        placeholder="Введите логин или email" />
    </UFormField>

    <UFormField label="Пароль" name="password" class="mb-5">
      <UInput
        v-model="state.password"
        type="password"
        class="w-full"
        placeholder="Введите пароль" />
    </UFormField>

    <div class="flex justify-end">
      <UButton label="Войти" type="submit" />
    </div>
  </UForm>
</template>
