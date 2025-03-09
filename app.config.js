import 'dotenv/config';

export default {
  expo: {
    name: "wallet-app",
    slug: "wallet-app",
    version: "1.0.0",
    extra: {
      apiUrl: process.env.API_URL,
    },
  },
};
