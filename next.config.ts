import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "example.com",
      "invitation-bucket-aws.s3.us-east-2.amazonaws.com",
    ],
  },
};

export default withNextIntl(nextConfig);
