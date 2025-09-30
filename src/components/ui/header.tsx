import { Github } from "lucide-react";
import Button from "./button";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">About</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Welcome to Inky!</DialogTitle>
                <DialogDescription className="space-y-1">
                  A simple email templates creator with support for Handlebars.
                </DialogDescription>
              </DialogHeader>
              <p>
                Inky is a simple code editor where you can copy/paste your HTML
                email template with your data and see the compiled output.
              </p>
              <p>
                No more second guessing what your email will look like in
                SendGrid or AWS SES, do once, do right.
              </p>
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGs5c2o2czEwb3NvZ25wMzhrYWgwZm9vMDl5cW5kZnFoOXl0MDhuMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10UUe8ZsLnaqwo/giphy.gif"
                alt="Here's a gif of Shaq sending a kiss your way 😉"
                className="mt-2"
              />
              <p className="mt-2">
                I'm Kashan, you can fine me{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://kashanahmad.me?ref=inky.pages.dev"
                  target="_blank"
                  className="underline text-primary"
                >
                  here
                </a>
                , thanks!
              </p>
            </DialogContent>
          </Dialog>
          <Button size="icon" asChild variant="outline">
            <a
              rel="noopener noreferrer"
              href="https://github.com/thekayshawn/inky?ref=inky.pages.dev"
              target="_blank"
            >
              <Github />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
