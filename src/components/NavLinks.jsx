/* eslint-disable react/prop-types */

const NavLinks = (props) => {
  return (
    <ul className="text-brand-100 font-roboto flex gap-6 flex-col items-center lg:flex-row lg:gap-8">
      {props.navLinkPaths.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-6 text-brand-blue font-semibold text-lg hover:underline hover:underline-offset-8 hover:decoration-wavy hover:text-brand-300 lg:text-brand-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks