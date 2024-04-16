import { AuthWidget, ThemeWidget } from '../modules';

import UserDropdown from '@/components/layouts/user-drop-down';
import { auth } from '@/auth';

const Navbar = async () => {
const session = await auth();
    return (
        <nav className="bg-background border-b text-foreground p-3 sticky top-0 z-[10]">
            <div className="container mx-auto px-0 flex justify-between items-center">
                <div className="text-lg font-bold">Papos</div>
                <div className="space-x-3 flex items-center">
                
                {
                    session?.user ? (
                        <UserDropdown/>
                    ) : (
                      <><ThemeWidget /><AuthWidget mode='modal' label='Se Connecter' /></>
                    )
                }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
