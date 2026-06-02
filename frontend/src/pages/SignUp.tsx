import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-2/4 flex items-center justify-center px-8">
        <Card className="w-full sm:w-120">
          <CardHeader>
            <CardTitle>
              Create a new account
            </CardTitle>
            <CardDescription>
              Enter your email below to create your new account
            </CardDescription>
            <CardAction>
              <Link to="/sign-in">
                <Button variant="link">Sign In</Button>
              </Link>
            </CardAction>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6 mt-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="name"
                      className="h-9"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
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
                Create Account
              </Button>
            </CardContent>
          </CardHeader>
        </Card>
      </div>

      <div className="hidden md:block w-px bg-gray-300">
      </div>

      <div className="hidden md:block md:w-2/4">
        <img src="/yellow.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}