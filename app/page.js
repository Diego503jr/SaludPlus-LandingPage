"use client";

import Image from "next/image";
import { useState } from "react";

const APK_URL = "/SaludPlus.apk";

const features = [
  {
    title: "Agendamiento inteligente",
    desc: "Reserva por especialidad, unidad y fecha. El sistema te muestra las franjas horarias disponibles en tiempo real.",
    icon: "calendar",
  },
  {
    title: "Recordatorios push",
    desc: "Confirmación al reservar y un aviso preventivo 24 horas antes. Si cambia tu horario, te avisamos al instante.",
    icon: "bell",
  },
  {
    title: "Mapa de clínicas",
    desc: "Ubica la unidad médica más cercana, mira sus horarios de atención y llega sin perderte.",
    icon: "pin",
  },
  {
    title: "Tu historial siempre a mano",
    desc: "Consulta tus citas pasadas y las programadas a futuro, organizadas de forma clara.",
    icon: "history",
  },
  {
    title: "Funciona sin internet",
    desc: "Gracias a la persistencia local, puedes revisar tus citas guardadas aunque te quedes sin señal.",
    icon: "offline",
  },
  {
    title: "Seguridad de extremo a extremo",
    desc: "Datos cifrados en tránsito (HTTPS) y protegidos en tu dispositivo. Acceso con tu número de afiliado.",
    icon: "shield",
  },
];

const faqs = [
  {
    q: "¿La aplicación tiene algún costo?",
    a: "No. SaludPlus es completamente gratuita para los derechohabientes del ISSS.",
  },
  {
    q: "¿Para qué dispositivos está disponible?",
    a: "La app es nativa para Android. Puedes instalarla descargando el archivo APK desde esta página.",
  },
  {
    q: "¿Cómo inicio sesión?",
    a: "Ingresas con tu número de afiliado y tu contraseña. Tus datos viajan cifrados y se guardan de forma segura.",
  },
  {
    q: "¿Puedo cancelar o reprogramar una cita?",
    a: "Sí, puedes autogestionar tus turnos desde la app, dentro del límite de cancelaciones permitido por el sistema.",
  },
];

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
          <path d="M3 9h18M8 2.5v4M16 2.5v4" />
          <path d="M8.5 14l2 2 4-4" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
          <path d="M10 20a2 2 0 0 0 4 0" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      );
    case "history":
      return (
        <svg {...common}>
          <path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "offline":
      return (
        <svg {...common}>
          <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
          <circle cx="12" cy="19.5" r="1" />
          <path d="M3 3l18 18" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[var(--bg)] text-[var(--ink)] antialiased">
      {/* Estilos locales: fuentes, variables de color y animaciones */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Manrope:wght@400;500;600;700&display=swap');
        :root{
          --bg:#F4F8FA; --card:#FFFFFF; --ink:#0C2A33; --muted:#5B7884;
          --brand:#0E5A75; --brand-dark:#093F52; --teal:#138C9B;
          --green:#1FA463; --green-soft:#E5F6EE; --line:#E0EAEE;
        }
        body{font-family:'Manrope',system-ui,sans-serif;}
        .display{font-family:'Bricolage Grotesque','Manrope',sans-serif;}
        @keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        .rise{animation:rise .7s cubic-bezier(.2,.7,.2,1) both;}
        @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .floaty{animation:floaty 6s ease-in-out infinite;}
        html{scroll-behavior:smooth;}
      `}</style>

      {/* ---------------- NAVBAR ---------------- */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#inicio" className="flex items-center gap-2.5">
            <Image
              src="/SaludPlus.png"
              alt="logo saludpluss"
              width={200}
              height={200}
            />
          </a>

          <ul className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
            <li>
              <a
                className="transition hover:text-[var(--brand)]"
                href="#problema"
              >
                El problema
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-[var(--brand)]"
                href="#funciones"
              >
                Funciones
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-[var(--brand)]"
                href="#nosotros"
              >
                Nosotros
              </a>
            </li>
          </ul>

          <a
            href="#descargar"
            className="hidden rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)] md:inline-block"
          >
            Descargar app
          </a>

          <button
            aria-label="Menú"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-[var(--brand-dark)] md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[var(--line)] bg-[var(--card)] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-[var(--ink)]">
              <a onClick={() => setMenuOpen(false)} href="#problema">
                El problema
              </a>
              <a onClick={() => setMenuOpen(false)} href="#funciones">
                Funciones
              </a>
              <a onClick={() => setMenuOpen(false)} href="#nosotros">
                Nosotros
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#descargar"
                className="mt-1 rounded-full bg-[var(--brand)] px-5 py-2.5 text-center font-semibold text-white"
              >
                Descargar app
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle,var(--teal),transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold text-[var(--brand)]">
              <span className="h-2 w-2 rounded-full bg-[var(--green)]" />
              Citas del ISSS, ahora desde tu teléfono
            </span>

            <h1 className="display mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[var(--brand-dark)] md:text-5xl">
              Olvídate de la fila <br className="hidden md:block" />
              de las <span className="text-[var(--green)]">3:00 a.m.</span>
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--muted)]">
              SaludPlus digitaliza tus citas de especialidad: agéndalas en
              línea, recibe recordatorios y ubica tu unidad médica. Menos
              espera, más salud.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#descargar"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[var(--brand)]/20 transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
              >
                <Icon name="download" className="h-5 w-5" />
                Descargar APK
              </a>
              <a
                href="#funciones"
                className="font-semibold text-[var(--brand)] underline-offset-4 hover:underline"
              >
                Ver cómo funciona →
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-8 text-sm">
              {[
                ["100%", "en línea"],
                ["24 h", "de aviso previo"],
                ["< 2 s", "de respuesta"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="display text-2xl font-bold text-[var(--brand-dark)]">
                    {n}
                  </div>
                  <div className="text-[var(--muted)]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Maqueta de teléfono */}
          <div
            className="flex justify-center rise"
            style={{ animationDelay: ".15s" }}
          >
            <div className="floaty relative w-[260px] rounded-[2.4rem] border-[6px] border-[var(--brand-dark)] bg-[var(--brand-dark)] shadow-2xl">
              <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/30" />
              <div className="overflow-hidden rounded-[1.9rem] bg-[var(--bg)]">
                {/* header de la app */}
                <div className="bg-[var(--brand)] px-5 pb-6 pt-8 text-white">
                  <p className="text-xs text-white/70">
                    Hola de nuevo <b>María Rivera</b>
                  </p>
                  <p className="display text-lg font-bold">Mis citas</p>
                </div>
                {/* tarjetas de cita */}
                <div className="space-y-3 px-4 py-4">
                  {[
                    ["Cardiología", "Lun 09:30", "var(--green)", "Confirmada"],
                    ["Dermatología", "Mié 11:00", "#E0A21E", "Reprogramada"],
                    ["Medicina general", "Vie 08:00", "var(--teal)", "Próxima"],
                  ].map(([esp, hora, color, estado]) => (
                    <div
                      key={esp}
                      className="rounded-2xl bg-white p-3.5 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[var(--ink)]">
                          {esp}
                        </span>
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: color }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        {hora} · Unidad Médica
                      </p>
                      <p
                        className="mt-2 text-[11px] font-semibold"
                        style={{ color }}
                      >
                        {estado}
                      </p>
                    </div>
                  ))}
                  <div className="rounded-2xl border-2 border-dashed border-[var(--line)] py-3 text-center text-xs font-semibold text-[var(--brand)]">
                    + Agendar nueva cita
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROBLEMA ---------------- */}
      <section
        id="problema"
        className="border-y border-[var(--line)] bg-[var(--card)]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--green)]">
              El problema que resolvemos
            </p>
            <h2 className="display mt-3 text-3xl font-bold tracking-tight text-[var(--brand-dark)] md:text-4xl">
              Madrugar para competir por un cupo ya no debería ser normal
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Hoy, conseguir una consulta de especialidad obliga a los pacientes
              a hacer fila desde la madrugada para competir por una oferta
              limitada de cupos por consultorio. Es desgastante para las
              personas e ineficiente para las clínicas.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["3:00 a.m.", "La hora a la que muchos llegan a hacer fila"],
              ["20 cupos", "Disponibles por consultorio cada día"],
              ["Filas largas", "Saturación en ventanillas y horas perdidas"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6"
              >
                <div className="display text-3xl font-bold text-[var(--brand)]">
                  {n}
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{l}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[var(--green-soft)] p-6 text-[var(--brand-dark)] md:p-8">
            <p className="display text-xl font-bold">La solución: SaludPlus</p>
            <p className="mt-2 text-[var(--brand-dark)]/80">
              Una plataforma móvil que digitaliza el flujo completo de atención.
              Reduce la saturación en ventanillas, optimiza el tiempo del
              paciente y mejora la asignación de recursos del ISSS.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- FUNCIONES ---------------- */}
      <section id="funciones" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--green)]">
            Funciones
          </p>
          <h2 className="display mt-3 text-3xl font-bold tracking-tight text-[var(--brand-dark)] md:text-4xl">
            Todo lo que necesitas, en una sola app
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 transition hover:-translate-y-1 hover:border-[var(--brand)]/30 hover:shadow-lg hover:shadow-[var(--brand)]/5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--green-soft)] text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-white">
                <Icon name={f.icon} />
              </span>
              <h3 className="display mt-5 text-lg font-bold text-[var(--brand-dark)]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- DESCARGAR (CTA llamativo) ---------------- */}
      <section id="descargar" className="px-5 pb-16 md:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[var(--brand-dark)] px-6 py-14 text-white md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle,var(--green),transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle,var(--teal),transparent 70%)",
            }}
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Descarga SaludPlus
                <br /> y agenda en minutos
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                Instala el APK en tu teléfono Android y empieza a gestionar tus
                citas del ISSS sin filas ni esperas.
              </p>

              <a
                href={APK_URL}
                download
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--green)] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <Icon name="download" className="h-6 w-6" />
                Descargar APK
              </a>
              <p className="mt-3 text-xs text-white/55">
                Android · Archivo .apk · Gratis
              </p>
            </div>

            {/* pasos de instalación */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <p className="display text-sm font-bold uppercase tracking-widest text-white/70">
                Cómo instalarlo
              </p>
              <ol className="mt-4 space-y-4">
                {[
                  "Toca «Descargar APK» y guarda el archivo en tu teléfono.",
                  "Si te lo pide, permite instalar apps de orígenes desconocidos.",
                  "Abre el archivo descargado y pulsa «Instalar».",
                  "Inicia sesión con tu número de afiliado. ¡Listo!",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--green)] text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/85">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- NOSOTROS ---------------- */}
      <section
        id="nosotros"
        className="border-t border-[var(--line)] bg-[var(--card)]"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--green)]">
              Nosotros
            </p>
            <h2 className="display mt-3 text-3xl font-bold tracking-tight text-[var(--brand-dark)] md:text-4xl">
              Cerrando la brecha tecnológica en la atención ambulatoria
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              El ISSS es el pilar de la seguridad social en El Salvador y
              atiende a miles de derechohabientes. SaludPlus nace para
              modernizar el acceso a las consultas de especialidad, sustituyendo
              procesos manuales y presenciales por un flujo digital, claro y
              accesible para todos.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Construido con una arquitectura cliente–servidor robusta, prioriza
              la seguridad de la información médica, el rendimiento y la
              disponibilidad, incluso sin conexión.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Android nativo", "Google Maps"],
              ["API RESTful", "Express"],
              ["Seguridad", " HTTPS"],
              ["Roles", "Paciente · Médico"],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5"
              >
                <p className="display font-bold text-[var(--brand-dark)]">
                  {t}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <h2 className="display text-center text-3xl font-bold tracking-tight text-[var(--brand-dark)]">
          Preguntas frecuentes
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5 [&_summary]:cursor-pointer"
            >
              <summary className="flex list-none items-center justify-between font-semibold text-[var(--brand-dark)]">
                {f.q}
                <span className="ml-4 text-2xl leading-none text-[var(--brand)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-[var(--line)] bg-[var(--brand-dark)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm md:flex-row">
          <div className="flex items-center gap-2.5">
            <Image
              src="/SaludPlusLogo.png"
              alt="logo saludpluss"
              width={200}
              height={200}
              className="rounded-2xl bg-white p-3 shadow-lg shadow-black/30 ring-1 ring-white/10"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, black 55%, transparent 100%)",
              }}
            />
          </div>
          <p className="text-white/60">
            · Proyecto académico <br />· Gestión de citas médicas para el ISSS,
            El Salvador <br />· Todos los Derechos Reservados por Los Intocables
            2026
          </p>
          <a
            href="#descargar"
            className="font-semibold text-[var(--green)] hover:underline"
          >
            Descargar app →
          </a>
        </div>
      </footer>
    </main>
  );
}
