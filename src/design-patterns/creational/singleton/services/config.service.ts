class ConfigService {
  private config: Record<string, string>;
  private static instance: ConfigService;

  private constructor() {
    this.config = {};
  }

  public static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService();
    }

    return ConfigService.instance;
  }
  public set(key: string, value: string): void {
    this.config[key] = value;
  }

  public get(key: string): string | undefined {
    return this.config[key];
  }
}

export const configApp = ConfigService.getInstance();
