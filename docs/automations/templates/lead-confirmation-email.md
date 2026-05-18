# Lead Confirmation Email Template

## Subject

`Thanks for contacting {{client_name}} - {{service_needed}}`

## Plain Text Body

Hi {{lead_name}},

Thanks for contacting {{client_name}} about **{{service_needed}}**.

We received your details:
- Service: {{service_needed}}
- Budget: {{budget_raw_or_na}}
- Reference ID: {{lead_id}}

Our team will contact you within {{response_sla_hours}} hours.

If you need to add more details, just reply to this email.

Regards,  
{{client_name}} Team

## Variables

- `{{lead_name}}` -> lead name
- `{{client_name}}` -> business/client name
- `{{service_needed}}` -> selected service
- `{{budget_raw_or_na}}` -> original budget string or `N/A`
- `{{lead_id}}` -> generated lead ID
- `{{response_sla_hours}}` -> expected response window
