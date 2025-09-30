import Button from "./button";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">About</Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
