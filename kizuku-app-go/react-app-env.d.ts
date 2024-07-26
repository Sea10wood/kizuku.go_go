interface ProcessEnv {
    readonly REACT_APP_API_BASE_URL: string;
  }
  
  interface Process {
    env: ProcessEnv;
  }
  
  declare var process: Process;