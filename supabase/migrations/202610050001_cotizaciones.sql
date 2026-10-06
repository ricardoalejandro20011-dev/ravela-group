-- Ejecutar en SQL Editor del proyecto Supabase antes de desplegar.
begin;
create table if not exists public.leads (
  id uuid primary key,
  nombre text not null,
  empresa text not null,
  email text not null,
  whatsapp text,
  estado text not null,
  industria text not null,
  tamano text,
  problema text,
  servicio_interes text,
  presupuesto_estimado text,
  mensaje text,
  dia_preferido text,
  bloque_horario text,
  origen text not null,
  created_at timestamptz not null default now()
);
alter table public.leads
  add column if not exists cotizacion jsonb,
  add column if not exists correo_estado text not null default 'pendiente',
  add column if not exists automatizacion_estado text not null default 'pendiente',
  add column if not exists entrega_intento_at timestamptz;
alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
grant select, insert, update on public.leads to service_role;
create index if not exists leads_created_at_idx on public.leads (created_at desc);
commit;
