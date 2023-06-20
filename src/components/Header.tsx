import Link from "next/link";

export type HeaderProps = {
  title: string;
  links: {
    title: string;
    href: string;
  }[]
};

export default function Header(props: HeaderProps) {
  return (
    <header
      className="flex flex-row px-12 py-6 bg-white shadow-md">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <div className="grow flex flex-row-reverse">
        {props.links.map((link) => (
          <Link key={link.title} className="px-4" href={link.href}>{link.title}</Link>
        ))}
      </div>
    </header>
  )
}
