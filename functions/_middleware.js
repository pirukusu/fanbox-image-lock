export const onRequest = async ({ request, next }) =&gt; {
  const referer = request.headers.get("referer") || "";
  const url = new URL(request.url);

  // 画像ファイルは制限せず常に表示OK
  const allowedExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif"];
  if (allowedExtensions.some(ext =&gt; url.pathname.endsWith(ext))) {
    return next();
  }

  // その他のリクエストはFANBOXからのみ許可
  if (!referer.includes("http://fanbox.cc")) {
    return new Response("403 Forbidden - No hotlinking allowed", {
      status: 403,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }

  // 問題なければ通常どおり処理
  return next();
};
