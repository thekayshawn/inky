import Editor from "@monaco-editor/react";
import Handlebars from "handlebars";
import { ChevronDown, RotateCw } from "lucide-react";
import { useMemo, useState, type ComponentProps } from "react";
import Button from "./components/ui/button";
import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import Header from "./components/ui/header";
import Resizable, {
  ResizableHandle,
  ResizablePanel,
} from "./components/ui/resizable";
import Tabs, { TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { examples } from "./examples/examples";
import ThemeProvider, {
  getSystemTheme,
  useTheme,
} from "./providers/theme-provider";

const defaultEditorOptions = {
  height: "100%",
  options: {
    minimap: { enabled: false },
    fontSize: 12,
  },
};

export default function App() {
  const [code, setCode] = useState(examples.greeting.html);
  const [jsonData, setJsonData] = useState(examples.greeting.json);
  const [activeTab, setActiveTab] = useState("html");
  const [iframeKey, setIframeKey] = useState(0);

  const compiledHtml = useMemo(() => {
    try {
      const template = Handlebars.compile(code);
      const data = JSON.parse(jsonData);
      return template(data);
    } catch {
      return code;
    }
  }, [code, jsonData]);

  function loadExample(exampleKey: string) {
    const example = examples[exampleKey];
    if (!example) return;

    setCode(example.html);
    setJsonData(example.json);
  }

  function reloadPreview() {
    setIframeKey((prev) => prev + 1);
  }

  return (
    <ThemeProvider>
      <div className="flex min-h-svh flex-col">
        <Header />
        <Resizable
          direction="horizontal"
          className="flex flex-1 overflow-hidden p-4"
        >
          {/* Editor Pane */}
          <ResizablePanel minSize={20} className="flex flex-col">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="flex flex-1 flex-col"
            >
              <div className="mb-2 flex items-center justify-between pr-4">
                <TabsList>
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="handlebars">Handlebars</TabsTrigger>
                </TabsList>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Examples
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {Object.entries(examples).map(([key, example]) => (
                      <DropdownMenuItem
                        key={key}
                        onClick={() => loadExample(key)}
                      >
                        {example.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <TabsContent value="html" className="flex-1">
                <EditorPanel
                  {...defaultEditorOptions}
                  value={code}
                  onChange={(value) => setCode(value ?? "")}
                  defaultLanguage="html"
                />
              </TabsContent>
              <TabsContent value="handlebars" className="flex-1">
                <EditorPanel
                  {...defaultEditorOptions}
                  value={jsonData}
                  onChange={(value) => setJsonData(value ?? "")}
                  defaultLanguage="json"
                />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle />
          {/* Preview Pane */}
          <ResizablePanel minSize={20} className="bg-background flex flex-col">
            <div className="flex items-center justify-between border-b px-4 py-2">
              <span className="text-muted-foreground text-sm font-medium">
                Preview
              </span>
              <Button
                size="icon"
                title="Reload preview"
                onClick={reloadPreview}
                variant="outline"
              >
                <RotateCw className="size-4" />
              </Button>
            </div>
            <iframe
              key={iframeKey}
              title="HTML Preview"
              srcDoc={compiledHtml}
              sandbox="allow-scripts"
              className="h-full w-full flex-1 border-0"
            />
          </ResizablePanel>
        </Resizable>
      </div>
    </ThemeProvider>
  );
}

function EditorPanel(props: ComponentProps<typeof Editor>) {
  const { theme } = useTheme();
  const editorTheme = theme === "system" ? getSystemTheme() : theme;

  return (
    <Editor theme={editorTheme === "dark" ? "vs-dark" : "light"} {...props} />
  );
}
