import { config } from "@/config";
import { Github } from "lucide-react";
import Button from "./button";
import Dialog, {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <nav className="bg-background h-16 border-b">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <Button size="icon" asChild variant="outline">
            <a
              rel="noopener noreferrer"
              href={`https://github.com/thekayshawn/inky?ref=${config.site}`}
              target="_blank"
            >
              <Github />
            </a>
          </Button>
          <ThemeToggle />
          <Dialog>
            <DialogTrigger asChild>
              <Button>About</Button>
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
                SendGrid or AWS SES. Do it once, do it right.
              </p>
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGs5c2o2czEwb3NvZ25wMzhrYWgwZm9vMDl5cW5kZnFoOXl0MDhuMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10UUe8ZsLnaqwo/giphy.gif"
                alt="Here's a gif of Shaq sending a kiss your way 😉"
                className="mt-2"
              />
              <p className="mt-2">
                Inspired by{" "}
                <a
                  rel="noopener noreferrer"
                  href={`https://handlebars-email-html-previewer.vercel.app?ref=${config.site}`}
                  target="_blank"
                  className="text-primary underline"
                >
                  Jack Bridger's
                </a>{" "}
                work, please{" "}
                <a
                  rel="noopener noreferrer"
                  href={`https://github.com/thekayshawn/inky?ref=${config.site}`}
                  target="_blank"
                  className="text-primary underline"
                >
                  star Inky
                </a>{" "}
                on GitHub if you like it and want more features to be added.
              </p>
              <p>
                I'm Kashan, you can fine me{" "}
                <a
                  rel="noopener noreferrer"
                  href={`https://kashanahmad.me?ref=${config.site}`}
                  target="_blank"
                  className="text-primary underline"
                >
                  here
                </a>
                , I'm making a ton more fun stuff as well. Thanks for stopping
                by!
              </p>
              <div>
                <h3 className="text-muted-foreground text-sm">Roadmap</h3>
                <ul className="list-disc pl-4">
                  <li>Send test emails</li>
                  <li>Manage templates</li>
                  <li>Template marketplace</li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
