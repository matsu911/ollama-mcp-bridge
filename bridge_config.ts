import path from 'path';

const homeDir = process.env.HOME ?? '';

const config = {
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": [
        path.join(homeDir, "/.npm-global/lib/node_modules/@modelcontextprotocol/server-filesystem/dist/index.js"),
        path.join(homeDir, "/work/ollama-mcp-bridge"),
      ]
    },
    "memory": {
      "command": "node",
      "args": [
        path.join(homeDir, "/.npm-global/lib/node_modules/@modelcontextprotocol/server-memory/dist/index.js"),
      ]
    },
    // "brave-search": {
    //   "command": "node",
    //   "args": [
    //     "C:\\Users\\patru\\AppData\\Roaming\\npm\\node_modules\\@modelcontextprotocol\\server-brave-search\\dist\\index.js"
    //   ],
    //   "env": {
    //     "BRAVE_API_KEY": "${BRAVE_API_KEY}"
    //   }
    // },
    // "github": {
    //   "command": "node",
    //   "args": [
    //     "C:\\Users\\patru\\AppData\\Roaming\\npm\\node_modules\\@modelcontextprotocol\\server-github\\dist\\index.js"
    //   ],
    //   "env": {
    //     "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
    //   }
    // },
    // "flux": {
    //   "command": "node",
    //   "args": [
    //     "C:\\Users\\patru\\AppData\\Roaming\\npm\\node_modules\\@patruff\\server-flux\\dist\\index.js"
    //   ],
    //   "env": {
    //     "REPLICATE_API_TOKEN": "${REPLICATE_API_TOKEN}"
    //   }
    // },
    // "gmail-drive": {
    //   "command": "node",
    //   "args": [
    //     "C:\\Users\\patru\\AppData\\Roaming\\npm\\node_modules\\@patruff\\server-gmail-drive\\dist\\index.js"
    //   ]
    // }
  },
  "llm": {
    "model": "qwen2.5:latest",
    "baseUrl": "http://localhost:11434",
    "apiKey": "ollama",
    "temperature": 0.7,
    "maxTokens": 1000
  },
  "systemPrompt": "You are a helpful assistant that can use various tools to help answer questions. You have access to multiple MCPs including filesystem operations, GitHub interactions, Brave search, Gmail, Google Drive, and Flux for image generation. When using these tools, make sure to respect their specific requirements and limitations."
}

export default config;
