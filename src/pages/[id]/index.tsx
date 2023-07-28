import { GetStaticPaths, GetStaticProps } from "next";

export type Data = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};

export default function DynamicPage(props: any) {
  return (
    <h1>
      <pre> {JSON.stringify(props, null, 2)} </pre>{" "}
    </h1>
  );
}

export const getStaticProps: GetStaticProps<Data, { id: string }> = async (
  ctx
) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${ctx.params?.id}`
  );
  const response: Data = await data.json();
  return {
    props: response,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: new Array(200).fill(0).map((_item, index) => `/${index + 1}`),
    fallback: false,
  };
};
