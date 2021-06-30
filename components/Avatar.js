import { UserAddIcon } from '@heroicons/react/solid';
import {signIn, signOut, useSession } from "next-auth/client";


function Avatar() {
    const [session] = useSession();
    
    return (
        
        <div onClick={ !session ? signIn : signOut} className="ml-auto cursor-pointer">
            {session ? <img
                            onClick={signOut}
                            className=" ml-auto rounded-full cursor-pointer"
                            src={session.user.image}
                            height={40}
                            width={40} 
                        />
                    : <UserAddIcon 
                        className="h-8 p-1 rounded-full bg-gray-200 hover:scale-125" 
                      />
            }
            
            
        </div>

        
    )
}

export default Avatar
