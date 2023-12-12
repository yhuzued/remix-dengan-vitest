import { json, type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json({});
};

export const action = async () => {
  return json({});
};

export default function Index() {
  return (
    <>
      <h1>Remix Dengan Vitest</h1>
    </>
  );
}
