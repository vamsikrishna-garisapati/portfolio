# Lead Capture Automation Playbook

This playbook sets up a reusable client lead flow:

`Client Form or Tally` -> `n8n Webhook` -> `Normalize + Validate` -> `Google Sheets` -> `Lead Email + Owner Alert` -> `Optional WhatsApp Follow-Up`

## Quick Start (10 Minutes)

1. Create a Google Sheet named `Leads` with the required header row.
2. Import `workflows/n8n/lead-capture-automation.json` into n8n.
3. Connect Google Sheets and SMTP credentials in the imported nodes.
4. Set env values: `GOOGLE_SHEET_ID`, `DEFAULT_OWNER_EMAIL`, `DEFAULT_CLIENT_NAME`.
5. Test webhook with one sample payload and verify:
   - row added in `Leads`
   - lead confirmation email (if lead email is present)
   - owner alert email

## 1) Canonical Lead Schema

Use this schema for every source. All inputs must be mapped into these keys before downstream steps.

```json
{
  "lead_id": "LC-20260506-171500-9f4a",
  "created_at_utc": "2026-05-06T15:45:10.000Z",
  "source": "client_website_form",
  "client_name": "acme-digital",
  "name": "Rahul",
  "phone_raw": "987xxxxxxx",
  "phone_normalized": "+91987xxxxxxx",
  "email": "rahul@example.com",
  "service_needed": "Website",
  "budget_raw": "₹20,000",
  "budget_value_inr": 20000,
  "message": "Need a business website in 2 weeks",
  "status": "new",
  "dedupe_key": "acme-digital:+91987xxxxxxx:Website",
  "owner_email": "owner@client.com"
}
```

### Required Fields

- `name`
- `phone_raw`
- `service_needed`
- `source`
- `client_name`
- `owner_email`

### Optional Fields

- `email`
- `budget_raw`
- `message`

## 2) Source Mapping

## Website Form -> Canonical

| Incoming field | Canonical field |
|---|---|
| `name` | `name` |
| `phone` | `phone_raw` |
| `email` | `email` |
| `service` | `service_needed` |
| `budget` | `budget_raw` |
| `message` | `message` |
| `source` (or static value) | `source` |
| `client_name` (hidden/static) | `client_name` |
| `owner_email` (hidden/static) | `owner_email` |

## Tally -> Canonical

Map by question labels or IDs in n8n.

| Tally answer label | Canonical field |
|---|---|
| `Name` | `name` |
| `Phone` | `phone_raw` |
| `Email` | `email` |
| `Service needed` | `service_needed` |
| `Budget` | `budget_raw` |
| `Message` | `message` |

Also set static values in the n8n Set/Code node:

- `source = "tally_form"`
- `client_name = "<client-slug>"`
- `owner_email = "<owner-email>"`

## 3) Google Sheet Design

Create one sheet named `Leads` with this exact header row:

`lead_id,created_at_utc,source,client_name,name,phone_raw,phone_normalized,email,service_needed,budget_raw,budget_value_inr,message,status,dedupe_key,owner_email`

Recommended extra tabs:

- `Config` (service names, owner emails, response SLA)
- `Logs` (workflow errors)

## 4) n8n Environment / Credentials

- Google Sheets OAuth credential
- SMTP credential (or Gmail/SendGrid node)
- n8n webhook URL reachable from public internet

Suggested environment variables (if using n8n env-based config):

- `DEFAULT_OWNER_EMAIL`
- `DEFAULT_CLIENT_NAME`
- `DEFAULT_RESPONSE_SLA_HOURS`

## 5) Validation and Normalization Rules

- Trim strings and collapse repeated spaces.
- Reject if `name`, `phone_raw`, or `service_needed` is missing.
- Convert `phone_raw` to `phone_normalized`:
  - Remove non-digits.
  - If 10 digits in India context, prefix `+91`.
- Parse `budget_raw` into integer `budget_value_inr` when possible.
- Set `status = "new"` for every accepted lead.
- Build `dedupe_key` as: `{client_name}:{phone_normalized}:{service_needed}`.

## 6) Duplicate Handling Strategy

- Lookup sheet by `dedupe_key` within a configurable window (default: 7 days).
- If duplicate:
  - Either skip append and update `status = "duplicate"`, or
  - Append with `status = "duplicate"` (keep full audit trail).
- Owner alert should include duplicate flag.

## 7) Email Behavior

- Lead confirmation email:
  - Sent only when a valid lead is accepted.
  - Include expected response time and optional WhatsApp contact line.
- Owner alert email:
  - Sent for every accepted lead.
  - Include name, phone, service, budget, source, and duplicate status.

## 8) Optional WhatsApp Follow-Up

Generate a click-to-chat link:

`https://wa.me/<countrycode+number>?text=<urlencoded_message>`

Use this in owner alert email for one-click manual follow-up.

## 9) Testing Checklist

- Valid website lead (all fields)
- Valid Tally lead (all fields)
- Lead with missing required fields (must fail with clear message)
- Duplicate lead within 7 days
- Lead without email (owner alert still sent)
- Budget parsing edge cases (`20k`, `₹20,000`, `20000`)

## 10) Rollout Checklist (Per Client)

1. Create `Leads` sheet with header.
2. Connect Google credential in n8n.
3. Configure SMTP/provider credential.
4. Set client constants: `client_name`, `owner_email`, `source`.
5. Import workflow JSON.
6. Run test cases (section 9).
7. Enable workflow and monitor first 10 submissions.

## 11) Reusable Asset Paths

- Workflow blueprint: `workflows/n8n/lead-capture-automation.json`
- Lead email template: `docs/automations/templates/lead-confirmation-email.md`
- Owner alert template: `docs/automations/templates/owner-alert-email.md`
