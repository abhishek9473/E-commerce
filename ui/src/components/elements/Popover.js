import { Popover, Transition } from '@headlessui/react';

export default function PopoverComponent({buttonlevel, children }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="outline-0" >{buttonlevel}</Popover.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel
              static
              className="absolute top-3 -left-8 z-10 w-56 bg-white shadow-lg text-navbarTextDark"
            >
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
