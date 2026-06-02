import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Brain } from 'lucide-react';

export default function Navbar(){
    return(
        <div className="flex flex-row justify-between border-2 h-15 px-10">

          <Link to="/">
            <div className="flex flex-row mt-3 gap-1">
              <Brain className="mt-1 font-semibold text-yellow-600" />
              <div className="text-2xl font-semibold">
                SecondBrain
              </div>  
            </div>
          </Link>
          
          
          <div className=" flex flex-row gap-2 mt-3">

            <Link to="/sign-up">
              <Button 
                variant="ghost" 
                className="bg-yellow-600 text-white hover:bg-white hover:text-black hover:border-black h-10 w-20 font-bold"
              >
                Sign Up
              </Button>
             </Link>

            <Link to="/sign-in">
              <Button 
                variant="ghost" 
                className="hover:bg-white hover:text-black hover:border-black bg-black text-white h-10 w-20 font-bold">
                Sign In
              </Button>
            </Link>
            
          </div>
          
        </div>
    );
}