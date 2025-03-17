import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Shield,
  Car,
  Globe,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-[80vh] lg:h-screen">
          {/* <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 to-black/80 z-10"></div> */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              src="/hero.mp4"
              alt="Musician performing"
              className="w-full h-full object-cover opacity-70"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="relative flex flex-col items-center pt-40 text-center md:items-start md:text-start md:px-10 z-20 max-w-[1650px] mx-auto px-4 md:pt-24 md:pt-32 lg:pt-40">
            <div className="flex gap-3 mb-6">
              <Link
                href="#"
                aria-label="Facebook"
                className=" p-1 rounded-full border-2 border-white flex items-center justify-center"
              >
                <img src="/icons/facebook.svg" alt="" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className=" p-1 rounded-full border-2 border-white flex items-center justify-center"
              >
                <img src="/icons/instagram.svg" alt="" />
              </Link>
              <Link
                href="#"
                aria-label="Waze"
                className=" p-1 rounded-full border-2 border-white flex items-center justify-center"
              >
                <img src="/icons/waze.svg" alt="" />
              </Link>
            </div>
            <h1 className="text-[32px] md:text-[44px] leading-[35px] md:leading-[46px] lg:leading-[66px] lg:text-[64px] font-[900] font-moderniz mb-4">
              TU ESPACIO DE
              <br />
              ENSAYO 24/7
            </h1>
            <p className="max-w-md text-[14px] md:text-[16px] lg:text-[18px] mb-8">
              Bienvenido a tu estudio de música donde puedes practicar en un
              ambiente profesional y confortable con el mejor equipamiento.
            </p>
            <Link
              href="#reservar"
              className="inline-block bg-white hover:bg-transparent border border-white hover:text-white text-[14px] md:text-[16px] lg:text-[18px] rounded-full px-6 py-3 text-sm font-medium transition-all text-black"
            >
              Reservar espacio
            </Link>
          </div>
        </section>

        {/* Features Bar */}
        <section className="bg-black text-[16px] md:text-[24px] min-h-[150px] border-t border-b border-[#9A9A9A]">
          <div className="max-w-[1650px] h-full mx-auto flex flex-nowrap overflow-x-auto md:grid md:grid-cols-3 md:overflow-x-hidden snap-x snap-mandatory">
            <div className="min-w-[80vw] md:min-w-0 py-4 px-6 text-center snap-center">
              <p className="min-h-[150px] font-[500] flex items-center justify-center uppercase tracking-wider">
                MÁS DE 5 AÑOS DE EXPERIENCIA
              </p>
            </div>
            <div className="min-w-[80vw] md:min-w-0 py-4 px-6 text-center snap-center">
              <p className="min-h-[150px] font-[500] flex items-center justify-center uppercase tracking-wider">
                EQUIPAMIENTO PROFESIONAL Y AMBIENTE PARA ÉXITO
              </p>
            </div>
            <div className="min-w-[80vw] md:min-w-0 py-4 px-6 text-center snap-center">
              <p className="min-h-[150px] font-[500] flex items-center justify-center uppercase tracking-wider">
                EN COSTA RICA & DISPONIBLE 24/7
              </p>
            </div>
          </div>
        </section>

        <section className="border-l border-r border-[#9A9A9A] max-w-[1650px] mx-auto min-h-screen xl:min-h-auto bg-black text-black relative overflow-hidden">
          <div className="flex flex-col md:flex-row h-full">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 h-[400px] md:h-full relative">
              <div className="absolute top-8 right-8 z-10">
                <img src="/icons/arrow.svg" className="w-8 h-8 text-white" />
              </div>
              <div
                className="h-full w-full relative"
                style={{ minHeight: "400px" }}
              >
                <Image
                  src="/images/section-1.png"
                  alt="Drummer performing"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/50 via-purple-900/30 to-transparent"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-1/2 bg-white p-5 xl:p-8">
              <div className="max-w-xl mx-auto">
                <h2 className="font-moderniz text-[23px] md:text-[28px] lg:text-[51px] font-bold tracking-tight">
                  NUESTRA HISTORIA
                </h2>
                <p className="text-[12px] md:text-[16px] lg:text-[18px] mb-6 leading-relaxed">
                  Backline Studios nació antes de la pandemia, pero durante ella
                  evolucionamos para convertimos en un estudio de televisión
                  para streaming, podcasts, entre mucho otros. Hoy, volvemos a
                  nuestras raíces como una sala de ensayo con un modelo de
                  autoservicio.
                </p>

                <h3 className="text-[20px] lg:text-[24px] font-bold mb-3">
                  ¿POR QUÉ NOSOTROS?
                </h3>

                <div className="space-y-4 text-[12px] md:text-[16px] lg:text-[18px]">
                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current.svg" alt="" />
                      </div>
                    </div>
                    <p>
                      Salas de ensayo operando como un Airbnb (sin personal en
                      sitio)
                    </p>
                  </div>

                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current.svg" alt="" />
                      </div>
                    </div>
                    <p>Acceso 24/7 con código de ingreso</p>
                  </div>

                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current.svg" alt="" />
                      </div>
                    </div>
                    <p>Equipamiento profesional para músicos exigentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}

        <section className="  bg-black lg:min-h-[600px] border-t border-b border-[#9A9A9A]">
          <div className="relative py-16 md:px-10 border-l border-r border-[#9A9A9A] max-w-[1650px] mx-auto flex flex-col justify-center items-center">
            <div className=" min-h-[250px] lg:min-h-[600px]  flex flex-col justify-center  px-4 max-w-5xl text-justify">
              <p className="text-center text-white/80 text-[14px] md:text-[26px] lg:text-[40px] leading-relaxed">
                Nuestro objetivo es{" "}
                <span className="font-bold text-white">romper barreras</span> y
                ofrecerte un estudio donde puedas enfocarte en lo que realmente
                importa:
                <span className="font-bold text-white">
                  {" "}
                  hacer música sin preocupaciones
                </span>
                . Tú traes el talento, nosotros el espacio perfecto para que
                <span className="font-bold text-white">
                  {" "}
                  tu sonido cobre vida
                </span>
                .
              </p>

              <div className="absolute md:px-20 font-moderniz bottom-5 md:bottom-10 lg:bottom-20 md:right-0 left-3 right-3 md:left-0 flex justify-between mt-24">
                <div className="flex items-end gap-2">
                  <img src="/icons/lock.svg" />
                  <span className="uppercase font-[900] text-[12px] md:text-[16px] lg:text-[20px] tracking-wider">
                    LIBERTAD
                  </span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="uppercase font-[900] text-[12px] md:text-[16px] lg:text-[20px] tracking-wider">
                    CREATIVIDAD
                  </span>
                  <img src="/icons/bulb.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-b text-center border-[#9A9A9A]">
          <div className=" py-2 md:py-4 lg:py-6 mx-auto md:px-10 border-l border-r border-[#9A9A9A] max-w-[1650px]  px-4">
            <section className="relative  py-6 px-8 flex justify-center items-center">
              <h2 className="font-moderniz text-[20px] md:text-[36px] lg:text-[64px] font-[900] tracking-wider">
                NUESTROS SERVICIOS
              </h2>
              <img
                src="/icons/arrow-down.svg"
                className="absolute md:block right-0 top-0 hidden "
              />
            </section>
          </div>
        </div>

        {/* Our Services */}
        <section className="bg-black border-b border-[#9A9A9A]">
          <div className="max-w-[1650px] border-l border-r border-[#9A9A9A] md:px-10 mx-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Service 1 */}
              <div className="border-b px-8 md:border-r border-[#9A9A9A] py-10  md:p-8 lg:p-16">
                <div className="mb-10 md:mb-20">
                  <div className="w-16 h-16 p-1 rounded-full border border-purple-600 flex items-center justify-center">
                    <img src="/icons/car.svg" />
                  </div>
                </div>

                <h3 className="font-moderniz lg:text-[32px] font-[900] text-[20px] mb-4">
                  PARQUEO
                </h3>
                <p className="text-gray-400 text-[18px] leading-relaxed">
                  Contamos con estacionamiento para hasta 30 vehículos,
                  asegurando comodidad y facilidad de acceso para todos los
                  músicos y su equipo.
                </p>
              </div>

              {/* Service 2 */}
              <div className="border-b md:border-b-0 md:border-r border-[#9A9A9A] py-10 px-8 md:p-8 lg:p-16">
                <div className="mb-10 lg:mb-20">
                  <div className="w-16 h-16 p-1 rounded-full border border-purple-600 flex items-center justify-center">
                    <img src="/icons/eye.svg" />
                  </div>
                </div>

                <h3 className="font-moderniz lg:text-[32px] font-[900] text-[20px] mb-4">
                  SEGURIDAD 24/7
                </h3>
                <p className="text-gray-400 text-[18px] leading-relaxed">
                  Nuestras instalaciones están monitoreadas con cámaras de
                  vigilancia y seguridad privada, para que ensayes sin
                  preocupaciones.
                </p>
              </div>

              {/* Service 3 */}
              <div className="py-10 px-8 md:p-8 lg:p-16">
                <div className="mb-10 md:mb-20">
                  <div className="w-16 h-16 p-3 rounded-full border border-purple-600 flex items-center justify-center">
                    <img src="/icons/scale.svg" />
                  </div>
                </div>

                <h3 className="font-moderniz lg:text-[32px] font-[900] text-[20px] mb-4">
                  ESPACIOS
                </h3>
                <p className="text-gray-400 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  Cada sala tiene 30m² de espacio, ideal para que bandas y
                  músicos individuales ensayen con total libertad y comodidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-l border-r border-[#9A9A9A] max-w-[1650px] mx-auto min-h-screen xl:min-h-auto text-black relative overflow-hidden">
          <div className="relative flex flex-col md:flex-row h-full">
            {/* Image for Mobile and Medium Screens */}
            <div className="xl:hidden w-full h-[400px] md:h-full">
              <div className="relative h-full w-full">
                <Image
                  src="/images/section-2.png"
                  alt="Guitarist performing"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-yellow-600/30"></div>
              </div>
              <div className="absolute top-8 right-8 z-10">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Image for Large Screens (Desktop) */}
            <div className="hidden xl:block absolute inset-0 w-full h-full">
              <div className="relative h-full w-full">
                <Image
                  src="/images/section-2.png"
                  alt="Guitarist performing"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-yellow-600/30"></div>
              </div>
              <div className="absolute top-8 right-8 z-10">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Left side - Content */}
            <div className="relative w-full md:w-1/2 bg-white p-5 xl:p-8 xl:bg-opacity-90 z-20">
              <div className="max-w-xl mx-auto">
                <h2 className="font-moderniz text-[23px] md:text-[28px] lg:text-[51px] font-[900] tracking-tight">
                  SALAS DE ENSAYO
                </h2>
                <p className="text-base text-[12px] md:text-[16px] lg:text-[18px] mb-6 leading-relaxed">
                  Contamos con dos salas de ensayo totalmente equipadas,
                  pensadas para brindarte la mejor calidad de sonido y
                  comodidad. Cada espacio ha sido diseñado para que puedas
                  concentrarte únicamente en tu música, sin distracciones ni
                  complicaciones.
                </p>

                <h3 className="font-moderniz text-[20px] lg:text-[24px] font-[900] mb-3 xl:mb-6">
                  EQUIPAMIENTO
                </h3>

                <div className="space-y-4 text-[12px] md:text-[16px] lg:text-[18px]">
                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current-purple.svg" />
                      </div>
                    </div>
                    <p className="">
                      Batería PDP Custom Maple / Yamaha Custom Stage
                    </p>
                  </div>

                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current-purple.svg" />
                      </div>
                    </div>
                    <p className="">
                      Amplificadores (VOX AC15 / Boss Katana / Marshall
                      Valvestate)
                    </p>
                  </div>

                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current-purple.svg" />
                      </div>
                    </div>
                    <p className="">3 Micrófonos Shure + cables XLR</p>
                  </div>

                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current-purple.svg" />
                      </div>
                    </div>
                    <p className="">Mixer Yamaha MG12 (12 canales)</p>
                  </div>

                  <div className="border border-[#9A9A9A] rounded-md p-4 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <img src="/icons/current-purple.svg" />
                      </div>
                    </div>
                    <p className="">Bose L1 para monitoreo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Placeholder for layout on small/medium devices */}
            <div className="w-full md:w-1/2 h-[400px] md:h-full xl:hidden relative">
              {/* This div is only for spacing on small and medium devices */}
            </div>
          </div>
        </section>

        {/* Regulations Section */}
        {/* Header */}
        <div className="border-t text-center border-[#9A9A9A]">
          <div className=" mx-auto py-2 md:py-4 lg:py-6 md:px-10 border-l border-r border-[#9A9A9A] max-w-[1650px]  px-4">
            <section className="relative py-6 px-8 flex justify-center items-center">
              <h2 className="font-moderniz text-[20px] md:text-[36px] lg:text-[64px] font-[900] tracking-wider">
                REGLAMENTO
              </h2>
              <img
                src="/icons/alert.svg"
                className="absolute right-0 top-0 hidden md:block"
              />
            </section>
          </div>
        </div>
        <div className=" border-t border-b border-[#9A9A9A]">
          <section className=" md:px-10 border-l border-r border-[#9A9A9A] md:h-[500px] max-w-[1650px] mx-auto  bg-black ">
            <div className="flex flex-col h-full">
              <div className="flex flex-col md:flex-row h-full ">
                {/* Left side - Image */}
                <div className="md:w-1/2 relative border-r border-gray-800">
                  <div className="relative h-[400px] md:h-full">
                    <Image
                      src="/images/section-3.png"
                      alt="Band performing"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-yellow-900/30"></div>

                    {/* Music note icon */}
                    <div className="absolute top-4 right-4">
                      <img
                        src="/icons/music.svg"
                        className="w-8 h-8 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Rules */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <div className="space-y-3 text-[18px]">
                    <div className="border border-[#9A9A9A] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold">[01]</span>
                        <p className="">
                          Deja los cables y micrófonos en su caja.
                        </p>
                      </div>
                    </div>

                    <div className="border border-[#9A9A9A] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold">[02]</span>
                        <p className="">Acomoda los pedestales y equipos.</p>
                      </div>
                    </div>

                    <div className="border border-[#9A9A9A] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold">[03]</span>
                        <p className="">
                          Deja los cables y micrófonos en su caja.
                        </p>
                      </div>
                    </div>

                    <div className="border border-[#9A9A9A] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold">[04]</span>
                        <p className="">No dejes basura dentro de las salas.</p>
                      </div>
                    </div>

                    <div className="border border-[#9A9A9A] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold">[05]</span>
                        <p className="">
                          Asegúrate de cerrar la puerta al salir. Presiona el
                          botón de candado para bloquear.
                        </p>
                      </div>
                    </div>

                    <div className="border border-[#9A9A9A] p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold">[06]</span>
                        <p className="">
                          Si tienes problemas, contacta al guardia en turno o a
                          Andrés Bustamante.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="border-b text-center border-[#9A9A9A]">
          <div className=" mx-auto py-3 md:py-5 lg:py-8 border-l border-r border-[#9A9A9A] md:px-10 max-w-[1650px]  px-4">
            <section className="relative  py-6 px-8 flex justify-center items-center">
              <h2 className="font-moderniz text-[24px] md:text-[44px] lg:text-[96px] font-[900] tracking-wider">
                EMPIEZA AHORA
              </h2>
              <img
                src="/icons/expand.svg"
                className="absolute right-0 top-0 hidden md:block"
              />
            </section>
          </div>
        </div>

        {/* Footer */}

        <footer className="bg-black text-white">
          <div className="max-w-[1650px] border-l border-r border-[#9A9A9A] md:px-10 mx-auto">
            <div className="flex flex-col gap-10 md:flex-row items-center text-center md:text-start md:items-start  space-x-8 py-12 px-6">
              {/* Logo and Description */}
              <div className="w-full flex flex-col  items-center md:items-start md:w-1/3 lg:w-2/5">
                <Image
                  src="/images/logo.png"
                  alt="Backline Studios Logo"
                  width={180}
                  height={40}
                  className="mb-4"
                />
                <p className="text-[16px] lg:text-[18px] text-gray-400 leading-relaxed">
                  Espacio de ensayo 24/7 con autoservicio y equipamiento
                  profesional. Reserva, accede y crea sin límites.
                </p>
              </div>

              {/* Information */}
              <div className="w-full md:w-1/3 lg:w-1/5 text-[16px] lg:text-[18px]">
                <h3 className="font-bold text-orange-500  mb-4 uppercase text-[18px] lg:text-[20px] tracking-wide">
                  Información
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      Reglamento
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      Tarifas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      Servicios
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="lg:w-1/5 hidden lg:block text-[16px] lg:text-[18px]">
                <h3 className=" text-orange-500 font-bold mb-4 uppercase text-[18px] lg:text-[20px] tracking-wide">
                  Redes Sociales
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className=" text-gray-400 hover:text-white transition-colors"
                    >
                      Waze
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="md:w-1/3 lg:w-1/5 text-[16px] lg:text-[18px]">
                <h3 className=" text-orange-500 font-bold mb-4 uppercase text-[18px] lg:text-[20px] tracking-wide">
                  Contacto
                </h3>
                <ul className="space-y-2">
                  <li className=" text-gray-400">Correo Electrónico:</li>
                  <li className=" text-gray-400">Teléfono: 8340-8304</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright and Social Icons */}
          <div className="border-t border-[#9A9A9A]">
            <div className="max-w-[1650px] mx-auto px-6 py-4 gap-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-center md:text-start text-[16px] lg:text-[18px] text-gray-500">
                © 2025 Backline Studios. Todos los derechos reservados.
              </p>
              <div className="flex gap-3 mb-6">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 p-1 rounded-full border border-white flex items-center justify-center"
                >
                  <img src="/icons/facebook.svg" alt="" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 p-1 rounded-full border border-white flex items-center justify-center"
                >
                  <img src="/icons/instagram.svg" alt="" />
                </Link>
                <Link
                  href="#"
                  aria-label="Waze"
                  className="w-8 h-8 p-1 rounded-full border border-white flex items-center justify-center"
                >
                  <img src="/icons/waze.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
