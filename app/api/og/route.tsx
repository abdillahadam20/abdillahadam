import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract parameters with defaults
    const title = searchParams.get("title")?.slice(0, 100) || "Adam Abdillah";
    const description =
      searchParams.get("description")?.slice(0, 200) || "Welcome to my website";
    const theme = searchParams.get("theme") || "light";

    // Define theme colors
    const themeColors = {
      light: {
        background: "white",
        foreground: "#111827",
        accent: "#4f46e5",
      },
      dark: {
        background: "#111827",
        foreground: "white",
        accent: "#818cf8",
      },
      blue: {
        background: "#1e40af",
        foreground: "white",
        accent: "#93c5fd",
      },
      green: {
        background: "#065f46",
        foreground: "white",
        accent: "#6ee7b7",
      },
    };

    // Select theme or default to light
    const colors =
      themeColors[theme as keyof typeof themeColors] || themeColors.light;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.background,
            padding: "40px 80px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: colors.accent,
              opacity: "0.2",
              transform: "translate(100px, -100px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: colors.accent,
              opacity: "0.2",
              transform: "translate(-100px, 100px)",
            }}
          />

          {/* Content container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: "900px",
              zIndex: "1",
            }}
          >
            {/* Logo placeholder - can be replaced with an actual logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: colors.accent,
                marginBottom: "24px",
                fontSize: "32px",
                fontWeight: "bold",
                color: colors.background,
              }}
            >
              {title.charAt(0)}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: "64px",
                fontWeight: "bold",
                color: colors.foreground,
                lineHeight: "1.1",
                marginBottom: "16px",
                letterSpacing: "-0.025em",
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: "32px",
                color: colors.foreground,
                opacity: "0.8",
                lineHeight: "1.3",
              }}
            >
              {description}
            </div>

            {/* URL or site name - can be customized */}
            <div
              style={{
                marginTop: "48px",
                fontSize: "24px",
                color: colors.accent,
                fontWeight: "medium",
              }}
            >
              {searchParams.get("site") || "yourdomain.com"}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(e);
    return new Response("Failed to generate the image", { status: 500 });
  }
}
