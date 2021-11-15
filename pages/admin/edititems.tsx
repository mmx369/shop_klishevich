import { GetServerSideProps } from "next";
import { useSession } from "next-auth/client";
import React from "react";
import Layout from "../../components/layout/layout";
import ListOfGoods from "../../components/ListOfGoods";
import ShopGoods from "../../models/shopGoods";
import { ERole } from "../../types/ERole";

export default function EditItems(res) {
  const [session, loading] = useSession();
  console.log(444444, res);

  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    return (
      <Layout title="Admin profile">
        <h1>Вы должны авторизоваться</h1>;
      </Layout>
    );
  }
  if (session.role !== ERole.Admin) {
    return (
      <Layout title="Admin profile">
        <h1>Вы должны быть администратором</h1>;
      </Layout>
    );
  }
  return (
    <Layout title="Администрирование | Работа с заказами">
      <ListOfGoods res={res} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await ShopGoods.find({});
    console.log(11111, data);

    const resSerialized = data.map(
      //@ts-ignore
      ({ _doc: { _id, date, __v, ...rest } }) => {
        rest._id = _id.toString();
        rest.date = date.toString();
        return rest;
      }
    );

    return {
      props: { res: resSerialized }, // will be passed to the page component as props
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
};
