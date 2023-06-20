import type { GetServerSideProps } from 'next'

export type HdmlEndpoint = {
  name: string;
  host: string;
  tenant: string;
  token: string;
}

export const getHdmlProps: GetServerSideProps<HdmlEndpoint> = async () => {
  const res = await fetch("http://localhost:8887/common/api/v0/token?ttl=2592000&scope={\"key\": \"value\"}")
  const token = await res.text()
  return {
    props: {
      name: "hdml.io",
      host: "http://localhost:8888",
      tenant: "common",
      token,
    }
  }
}
