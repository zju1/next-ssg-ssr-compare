import { GetStaticProps, InferGetStaticPropsType } from "next";
import "../styles.css";
import Link from "next/link";
import { Data } from "./[id]";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <ul>
      {props.data.map((item) => (
        <li key={item.id}>
          <Link href={`/${item.id}`}>Go to Static {item.id}</Link>
          <Link href={`/${item.id}/ssr`}>Go to SSR {item.id}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps<{ data: Data[] }> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
