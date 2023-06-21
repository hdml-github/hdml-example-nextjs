import { useState } from 'react';
import type { InferGetServerSidePropsType } from 'next'
import { Inter } from "next/font/google"
import { getHdmlProps } from '@/helpers/getHdmlProps';
import { ModalProvider } from '@/providers/ModalProvider';
import HdmlConnector from "@/components/HdmlConnector";
import Header from '@/components/Header';
import AddWindow from './AddWindow';
import ModelWindow from './ModelWindow';
import FrameWindow from './FrameWindow';

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
  const [showAddWindow, setShowAddWindow] = useState(false);
  const [showModelWindow, setShowModelWindow] = useState(false);
  const [showFrameWindow, setShowFrameWindow] = useState(false);
  
  const addActionHandler = (id: "model" | "frame") => {
    setShowAddWindow(false);
    switch(id) {
      case "model":
        setShowModelWindow(true);
        break;
      case "frame":
        setShowFrameWindow(true);
        break;
    }
  };

  return (
    <ModalProvider>

      {/* hdml.io */}
      <HdmlConnector
        name={props.name}
        host={props.host}
        tenant={props.tenant}
        token={props.token}
      />

      {/* Page */}
      <div className="flex flex-col min-h-screen">
        
        {/* Header */}
        <Header title={header.title} links={header.links} />
        
        {/* Body */}
        <main
          className={`flex flex-col items-center justify-center px-12 py-6 ${inter.className}`}>
          <div
            className="text-slate-500">
            Please, add your Model/Frame
          </div>

          <button
            className="absolute bottom-0 right-0 mb-6 mr-12 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-3xl text-white shadow-md shadow-black/50 active:shadow-black/20"
            onClick={ () => setShowAddWindow(true) }>
            +
          </button>
        </main>
        
        {/* Modals */}
        <>
          <AddWindow
            show={ showAddWindow }
            close={ () => setShowAddWindow(false) }
            action={ addActionHandler }
          />
          <ModelWindow
            show={ showModelWindow }
            close={ () => setShowModelWindow(false) }
          />
          <FrameWindow
            show={ showFrameWindow }
            close={ () => setShowFrameWindow(false) }
          />
        </>
      </div>
    </ModalProvider>
  )
}
