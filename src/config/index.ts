interface ConfigType {
  dev: {
    backendUrl: string;
    frontendUrl: string;
    websocket: string;
  };
  prod: {
    backendUrl: string;
    frontendUrl: string;
    websocket: string;
  };
}

const isProd = process.env.NODE_ENV === "production";

export const configuration: ConfigType = {
  dev: {
    backendUrl: "http://localhost:8080",
    frontendUrl: "http://localhost:3000",
    websocket: "ws://localhost:8080",
  },
  prod: {
    backendUrl: "https://api.pierreetmichelle2023.fr",
    frontendUrl: "https://pierreetmichelle2023.fr",
    websocket: "wss://api.pierreetmichelle2023.fr",
  },
};

export const config = isProd ? configuration.prod : configuration.dev;
