import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";

export function CodeRunner() {
  const [code, setCode] = useState("# Write your Python code here\nprint('Hello, AdasAcademy!')");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    // Placeholder for code execution
    // In a real implementation, this would send code to a backend Python interpreter
    setOutput("Code execution feature coming soon!\n\nThis will allow you to test Python code snippets directly in the browser.");
  };

  const handleReset = () => {
    setCode("# Write your Python code here\nprint('Hello, AdasAcademy!')");
    setOutput("");
  };

  return (
    <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-white">
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
        <span className="font-semibold">Python Code Editor</span>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-400 rounded transition-colors text-sm"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
          <button
            onClick={handleRun}
            className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-500 rounded transition-colors text-sm"
          >
            <Play className="h-4 w-4" />
            Run Code
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Code</h3>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-3 font-mono text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            spellCheck="false"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Output</h3>
          <div className="w-full h-64 p-3 font-mono text-sm bg-gray-900 text-green-400 rounded overflow-auto whitespace-pre-wrap">
            {output || "Click 'Run Code' to see output here..."}
          </div>
        </div>
      </div>
    </div>
  );
}
