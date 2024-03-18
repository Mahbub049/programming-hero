import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Contact', path: '/contact' }
      ];

      const [open, setOpen] = useState(false);

    return (
            <div>
                <div onClick={() => setOpen(!open)} className="text-2xl">
                    {
                        open === false ? <MdMenu /> : <RxCross2 />

                    }
                </div>
                    <ul className="lg:flex gap-6">
                        {
                            routes.map(route=><Navigation key={routes.id} route={route}></Navigation>)
                        }
                    </ul>
            </div>
    );
};

export default Navbar;