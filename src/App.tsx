import Editor from "@monaco-editor/react";
import Handlebars from "handlebars";
import { ChevronDown, RotateCw } from "lucide-react";
import { useMemo, useState, type ComponentProps } from "react";
import Button from "./components/ui/button";
import Checkbox from "./components/ui/checkbox";
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
import Tooltip, {
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { config } from "./config";
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

function sanitizeForEmail(html: string): string {
  // Remove unsupported CSS properties for email clients
  const unsupportedProperties = [
    "position",
    "display: flex",
    "display: grid",
    "transform",
    "transition",
    "animation",
    "box-shadow",
    "text-shadow",
    "border-radius",
    "opacity",
    "flex",
    "grid",
    "gap",
  ];

  let sanitized = html;

  // Remove unsupported CSS properties from style tags
  sanitized = sanitized.replace(
    /<style[^>]*>([\s\S]*?)<\/style>/gi,
    (_, styles) => {
      let cleanedStyles = styles;

      unsupportedProperties.forEach((prop) => {
        // Remove property lines
        const regex = new RegExp(`[^}]*${prop}[^;]*;`, "gi");
        cleanedStyles = cleanedStyles.replace(regex, "");
      });

      return `<style>${cleanedStyles}</style>`;
    },
  );

  return sanitized;
}

export default function App() {
  const [code, setCode] = useState(examples.greeting.html);
  const [jsonData, setJsonData] = useState(examples.greeting.json);
  const [activeTab, setActiveTab] = useState("html");
  const [iframeKey, setIframeKey] = useState(0);
  const [emailSafeMode, setEmailSafeMode] = useState(true);

  const compiledHtml = useMemo(() => {
    try {
      const template = Handlebars.compile(code);
      const data = JSON.parse(jsonData);
      let result = template(data);

      if (emailSafeMode) {
        result = sanitizeForEmail(result);
      }

      return result;
    } catch {
      return code;
    }
  }, [code, jsonData, emailSafeMode]);

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
              className="flex flex-1 flex-col"
              onValueChange={setActiveTab}
            >
              <div className="mb-2 flex items-center justify-between pr-4">
                <div className="flex items-center gap-3">
                  <TabsList>
                    <TabsTrigger value="html">HTML</TabsTrigger>
                    <TabsTrigger value="json">JSON</TabsTrigger>
                  </TabsList>
                  <a
                    rel="noopener noreferrer"
                    href={`https://handlebarsjs.com/guide/expressions.html#whitespace-control?ref=${config.site}`}
                    target="_blank"
                    className="text-primary text-sm underline"
                  >
                    Handlebars syntax
                  </a>
                </div>
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
              <TabsContent value="json" className="flex-1">
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
            <div className="flex items-center justify-between border-b pb-4 pl-4">
              <span className="text-muted-foreground text-sm font-medium">
                Preview
              </span>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                      <Checkbox
                        checked={emailSafeMode}
                        onCheckedChange={(checked) =>
                          setEmailSafeMode(!!checked)
                        }
                      />
                      <span className="text-muted-foreground">
                        Email-safe mode
                      </span>
                    </label>
                  </TooltipTrigger>
                  <TooltipContent align="end">
                    Removes CSS properties unsupported by email clients. Check
                    out{" "}
                    <a
                      rel="noopener noreferrer"
                      href={`https://www.caniemail.com?ref=${config.site}`}
                      target="_blank"
                      className="text-primary underline"
                    >
                      caniemail.com
                    </a>{" "}
                    for supported properties.
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      onClick={reloadPreview}
                      variant="outline"
                    >
                      <RotateCw className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Reload preview</TooltipContent>
                </Tooltip>
              </div>
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
