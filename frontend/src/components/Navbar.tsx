import { Button } from "./ui/button";
import { Brain } from 'lucide-react';

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between border-2 h-15 px-10">

          <div className="flex flex-row mt-3 gap-2">
            <Brain className="mt-1" />
            <div className="text-2xl">
              SecondBrain
            </div>  
          </div>
          
          <div className=" flex flex-row gap-2 mt-3">
            <Button variant="ghost" className="bg-yellow-600 text-white hover:bg-white hover:text-black hover:border-black h-10 w-20 font-bold"
            >Sign Up</Button>
            <Button variant="ghost" className="hover:bg-white hover:text-black hover:border-black bg-black text-white h-10 w-20 font-bold">Sign In</Button>
          </div>

          <div></div>
          
        </div>
    );
}