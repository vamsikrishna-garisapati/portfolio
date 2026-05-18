import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  budget?: string;
  message?: string;
};

function sanitize(value: unknown) {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;

    const payload: LeadPayload = {
      name: sanitize(body.name),
      phone: sanitize(body.phone),
      email: sanitize(body.email),
      service: sanitize(body.service),
      budget: sanitize(body.budget),
      message: sanitize(body.message),
    };

    if (!payload.name || !payload.phone || !payload.service) {
      return NextResponse.json(
        { ok: false, error: "Name, phone, and service are required." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { ok: false, error: "Server is missing N8N_LEAD_WEBHOOK_URL." },
        { status: 500 },
      );
    }

    const n8nPayload = {
      ...payload,
      source: "client_website_form",
      client_name: process.env.LEAD_CLIENT_NAME ?? "portfolio-client",
      owner_email: process.env.LEAD_OWNER_EMAIL ?? "",
    };

    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(n8nPayload),
      cache: "no-store",
    });

    const text = await upstream.text();
    if (!upstream.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Webhook request failed.",
          details: text.slice(0, 400),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, upstream: text ? text.slice(0, 400) : null });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 });
  }
}
