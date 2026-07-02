import html from "./从0到开发AI应用.html";

export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: { "content-type": "text/html;charset=utf-8" },
    });
  },
};
