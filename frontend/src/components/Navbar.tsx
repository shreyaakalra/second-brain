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
            <Button>Sign Up</Button>
            <Button>Sign In</Button>
          </div>
          
        </div>
    );
}