import { json, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json({ umur: 28, namaTombol: "Login" });
};

export const action = async () => {
  return json({ w: "Memproses" });
};

export default function Index() {
  const { umur, namaTombol } = useLoaderData<typeof loader>();
  const props = useActionData<typeof action>();

  return (
    <>
      <h1>Login</h1>
      <Form method="post">
        <Button type="submit">{!props ? namaTombol : props.w}</Button>
      </Form>
      <p>Umur: {umur}</p>
    </>
  );
}
