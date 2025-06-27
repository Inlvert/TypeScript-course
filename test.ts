




type Config = {
  protocol: "http" | "https";
  port: 3000 | 5000;
};

type Role = {
  role: string;
};

type ConfigWithRole = Config & Role;


const serverConfig2: IConfogWithIRole = {
  protocol: "http",
  port: 5000,
  data: new Date(),
  role: "user",
};


