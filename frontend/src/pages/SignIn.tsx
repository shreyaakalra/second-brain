import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-2/4 bg-white">
        <img src="/yellow.jpg" className="w-full h-full object-cover" />
      </div>

      <div className="hidden md:block w-px bg-white">
      </div>

      <div className="w-full md:w-2/4 flex items-center justify-center px-8">
        <Card className="w-full sm:w-120">
          <CardHeader>
            <CardTitle>
              Log in to your account
            </CardTitle>
            <CardDescription>
              Enter your email and password to log in to your account
            </CardDescription>
            <CardAction>
              <Link to="/sign-up">
                <Button variant="link">Sign Up</Button>
              </Link>
            </CardAction>
            <CardContent className="mt-5">
              <form>
                <div className="flex flex-col gap-6 mt-5">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="h-9"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password"
                      type="password"
                      className="h-9"
                      placeholder="enter your password"
                      required
                    />
                  </div>
                </div>
              </form>
              <Button variant="ghost" className="mt-8 font-bold w-full h-9 bg-yellow-600 text-white hover:border-black">
                Log In
              </Button>
            </CardContent>
          </CardHeader>
        </Card>
      </div>

      
    </div>
  );
}