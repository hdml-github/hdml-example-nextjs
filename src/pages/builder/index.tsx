import { useState } from 'react';
import type { InferGetServerSidePropsType } from 'next'
import { Inter } from "next/font/google"
import { getHdmlProps } from '@/helpers/getHdmlProps';
import { ModalProvider } from '@/providers/ModalProvider';
import ModalWrapper from '@/components/ModalWrapper';
import HdmlConnector from "@/components/HdmlConnector";
import Header from '@/components/Header';
import AddModal from './AddModal';

/**
 * Font definition.
 */
const inter = Inter({ subsets: ["latin"] });

/**
 * Page header data definition.
 */
const header = {
  title: "Builder",
  links: [
    { title: "Builder", href: "/builder" },
    { title: "Home", href: "/" },
  ],
};

/**
 * Server side precalculations for the HdmlConnector props.
 */
export const getServerSideProps = getHdmlProps;

/**
 * Query Builder component.
 */
export default function Builder(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const [showAddModal, setShowAddModal] = useState(false);
  
  return (
    <ModalProvider>
      <div className="flex flex-col min-h-screen">
        <HdmlConnector
          name={props.name}
          host={props.host}
          tenant={props.tenant}
          token={props.token}
        />
        <Header title={header.title} links={header.links} />
        <main
          className={`flex flex-col items-center justify-center px-12 py-6 ${inter.className}`}>
          <div
            className="text-slate-500">
            Please, add your Model/Frame
          </div>

          <AddModal show={showAddModal} setShow={setShowAddModal} />
          
          <button
            className="absolute bottom-0 right-0 mb-6 mr-12 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-3xl text-white shadow-md shadow-black/50 active:shadow-black/20"
            onClick={ () => setShowAddModal(true) }>
            +
          </button>
        </main>
      </div>
      <ModalWrapper />
    </ModalProvider>
  )
}
