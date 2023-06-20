import type { InferGetServerSidePropsType } from 'next'
import { Inter } from "next/font/google"
import { getHdmlProps } from '@/helpers/getHdmlProps';
import HdmlConnector from "@/components/HdmlConnector";
import Header from '@/components/Header';

const inter = Inter({ subsets: ["latin"] })
const header = {
  title: "Home",
  links: [
    { title: "Builder", href: "/builder" },
    { title: "Home", href: "/" },
  ],
};

export const getServerSideProps = getHdmlProps;
export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HdmlConnector
        name={props.name}
        host={props.host}
        tenant={props.tenant}
        token={props.token}
      />
      <Header title={header.title} links={header.links} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}>
      </main>
    </>
  )
}
