// components/Meta/Meta.jsx
import { Helmet } from "react-helmet-async";
import Gdglogo from "../../assets/images/Gdglogo.svg";

export default function Meta({
  title = "GDG Minya",
  description = "GDG Minya is a youth-driven tech community that empowers people through technology.",
  keywords = "GDG Minya, Tech Community, Workshops, Events",
  author = "GDG Minya",
  image = Gdglogo, // default image
}) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
