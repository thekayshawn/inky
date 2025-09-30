import Header from "./components/ui/header";
import ThemeProvider from "./providers/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-svh gap-4">
        <Header />
      </div>
    </ThemeProvider>
  );
}
