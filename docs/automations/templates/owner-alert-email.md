# Owner Alert Email Template

## Subject

`New Lead: {{lead_name}} | {{service_needed}}`

## Plain Text Body

New lead captured.

Lead summary:
- Lead ID: {{lead_id}}
- Name: {{lead_name}}
- Phone: {{phone_normalized}}
- Email: {{email_or_na}}
- Service: {{service_needed}}
- Budget: {{budget_raw_or_na}}
- Source: {{source}}
- Duplicate: {{duplicate_flag}}
- Received At (UTC): {{created_at_utc}}

Quick follow-up:
- WhatsApp: {{whatsapp_link_or_not_configured}}

Suggested next action:
- Call within {{response_sla_hours}} hours and update status in Google Sheet.

## Variables

- `{{lead_id}}`
- `{{lead_name}}`
- `{{phone_normalized}}`
- `{{email_or_na}}`
- `{{service_needed}}`
- `{{budget_raw_or_na}}`
- `{{source}}`
- `{{duplicate_flag}}` (`Yes`/`No`)
- `{{created_at_utc}}`
- `{{whatsapp_link_or_not_configured}}`
- `{{response_sla_hours}}`
