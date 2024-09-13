import { bottombarLinks } from '@/constants';
import { INavLink } from '@/types';
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Bottombar = () => {
  const { pathname } = useLocation();

  const bottombarLinks = [
    {
      icon: "bx-home",
      route: "/",
      label: "Home",
    },
    {
      icon: "bx-image",
      route: "/explore",
      label: "Explore",
    },
    {
      icon: "bx-bookmark",
      route: "/saved",
      label: "Saved",
    },
    {
      icon: "bx-image-add",
      route: "/create-post",
      label: "Create",
    },
  ];


  return (

    <section className="bottom-bar">
      {bottombarLinks.map(
        (link) => {
          const isActive = pathname === link.route;

          return (

            <Link to={link.route}
              key={link.label}
              className={`${isActive && 'bg-primary-500 rounded-[10px]'} flex-center flex-col gap-1 p-2 transition`} >
              <i className={`bx ${link.icon} bx-sm ${isActive ? 'text-white ' : ''}` }></i>
              <p className='tiny-medium text-light-2'>{link.label}</p>
            </Link>

          )
        }
      )}
    </section>

  )
}

export default Bottombar