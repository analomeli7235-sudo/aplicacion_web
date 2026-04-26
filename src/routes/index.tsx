import { createFileRoute } from "@tanstack/react-router";
import { Mountain, Wifi, BatteryFull, Signal } from "lucide-react";
import homeBg from "@/assets/home-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mi Aventura — Home Screen" },
      {
        name: "description",
        content:
          "Prototipo visual del Home Screen de la aplicación móvil Mi Aventura, simulando una pantalla de inicio en Flutter.",
      },
    ],
  }),
});

function Index() {
  const now = new Date();
  const time = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Phone frame simulating a mobile device */}
      <div className="relative h-[720px] w-[360px] overflow-hidden rounded-[42px] border-[10px] border-slate-950 shadow-2xl ring-1 ring-white/10">
        {/* Background image */}
        <img
          src={homeBg}
          alt="Fondo de montañas al atardecer"
          width={768}
          height={1344}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

        {/* Status bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-3 text-xs font-semibold text-white">
          <span>{time}</span>
          <div className="flex items-center gap-1.5">
            <Signal className="h-3.5 w-3.5" />
            <Wifi className="h-3.5 w-3.5" />
            <BatteryFull className="h-4 w-4" />
          </div>
        </div>

        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

        {/* Content */}
        <div className="relative z-10 flex h-[calc(100%-2rem)] flex-col items-center justify-between px-6 pb-10 pt-16 text-center text-white">
          {/* App icon + name */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md ring-1 ring-white/30">
              <Mountain className="h-8 w-8 text-white" strokeWidth={2.2} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight drop-shadow-lg">
              Mi Aventura
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-white/80">
              Explora · Descubre · Vive
            </p>
          </div>

          {/* Welcome message */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md ring-1 ring-white/20">
              <p className="text-sm font-medium text-white/90">
                Mensaje de bienvenida
              </p>
              <p className="mt-1 text-2xl font-semibold">Hello World</p>
            </div>
            <p className="max-w-[260px] text-sm leading-relaxed text-white/85 drop-shadow">
              ¡Bienvenido! Comienza tu próxima aventura con nosotros y descubre
              destinos increíbles.
            </p>
          </div>

          {/* CTA */}
          <button className="w-full rounded-full bg-white py-3 text-sm font-semibold text-slate-900 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
            Comenzar
          </button>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 z-20 h-1 w-28 -translate-x-1/2 rounded-full bg-white/70" />
      </div>
    </main>
  );
}
